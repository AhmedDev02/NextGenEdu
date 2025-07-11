import { useState, useMemo, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaFileImport, FaFileExport } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import toast from "react-hot-toast";

import useGetTeachers from "./useGetTeachers";
import useGetDepartments from "../super-department-management/useGetDepartments";
import useExportFileTeacher from "./useExportFileTeacher";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import Spinner from "../../../ui/amr/Spinner";
import {
  PageContainer,
  Header,
  Title,
  InfoContainer,
  FilterContainer,
  FilterSelect,
  SearchContainer,
  SearchInput,
  StyledSearchIcon,
  ContentContainer,
  EntityCount,
  UserInfo,
  UserName,
  UserId,
  Department,
  ButtonsContainer,
  EditButton,
  EmptyStateContainer,
  ActionsContainer,
  ActionButton,
} from "../super-students-management/SharedStyles";
import useImportFileTeachers from "./useImportFileTeacher";

// --- Styles ---

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.5fr 1fr 1fr;
  padding: 1rem 1.5rem;
  color: #6b7280;
  font-weight: 600;
  text-align: right;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TeacherRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.5fr 1fr 1fr;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.07);
  text-align: right;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 1rem;
    text-align: center;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 1rem;
  border-top: 1px solid #e5e7eb;
  margin-top: 1.5rem;
  direction: ltr;
`;

const PaginationButton = styled.button`
  background-color: ${(props) => (props.active ? "#0d825b" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#374151")};
  border: 1px solid #e5e7eb;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.875rem;
  font-weight: 600;

  &:hover:not(:disabled) {
    background-color: #0a6847;
    color: #fff;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const PaginationNavButton = styled(PaginationButton)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const TEACHERS_PER_PAGE = 10;

const TeachersManagementContent = () => {
  const [department, setDepartment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const { teachers, error, isPending, refetch } = useGetTeachers(department);

  const { mutateAsync: exportFile, isPending: isExporting } =
    useExportFileTeacher();

  const { mutate: importFile, isPending: isImporting } =
    useImportFileTeachers();

  const {
    data: departments,
    isPending: isLoadingDepartments,
    error: errorDept,
  } = useGetDepartments();

  const handleExport = async () => {
    if (isExporting) return;

    try {
      const blob = await exportFile();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "teachers.xlsx");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      toast.error("Failed to export file.");
    }
  };

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      importFile(formData, {
        onSuccess: () => {
          toast.success("تم رفع الملف بنجاح، جاري معالجة البيانات");
          refetch();
        },
        onError: (err) => {
          toast.error(err.message || "فشل رفع الملف");
        },
      });
    }
  };

  // 1. Filter teachers by search query first
  const filteredTeachers = useMemo(() => {
    if (!teachers?.data) return [];
    return teachers.data.filter((teacher) =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [teachers, searchQuery]);

  // 2. Calculate total pages based on the *filtered* list
  const totalPages = Math.ceil(filteredTeachers.length / TEACHERS_PER_PAGE);

  // 3. Paginate the *filtered* list
  const paginatedTeachers = useMemo(() => {
    const startIndex = (currentPage - 1) * TEACHERS_PER_PAGE;
    const endIndex = startIndex + TEACHERS_PER_PAGE;
    return filteredTeachers.slice(startIndex, endIndex);
  }, [filteredTeachers, currentPage]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [department, searchQuery]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const isWorking =
    isPending || isLoadingDepartments || isImporting || isExporting;
  const anyError = error || errorDept;

  if (isPending || isLoadingDepartments) return <Spinner />;

  if (anyError) {
    return (
      <ErrorFallBack
        message={anyError?.message || "خطأ في تحميل البيانات"}
        onRetry={refetch}
      />
    );
  }

  return (
    <PageContainer>
      {/* Hidden file input for import */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />

      <Header>
        <Title>إدارة أعضاء هيئة التدريس</Title>
        <ActionsContainer>
          <ActionButton
            onClick={() => navigate("create-teacher")}
            bgColor="#0d825b"
            disabled={isWorking}
          >
            <FaPlus />
            <span>إضافة دكتور</span>
          </ActionButton>
          <ActionButton
            onClick={handleImportClick}
            bgColor="#3b82f6"
            disabled={isWorking}
          >
            <FaFileImport />
            <span>{isImporting ? "جاري الرفع..." : "استيراد ملف"}</span>
          </ActionButton>
          <ActionButton
            onClick={handleExport}
            bgColor="#10b981"
            disabled={isWorking}
          >
            <FaFileExport />
            <span>{isExporting ? "جاري التصدير..." : "تصدير ملف"}</span>
          </ActionButton>
        </ActionsContainer>
      </Header>

      <InfoContainer>
        <FilterContainer>
          <FilterSelect
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            disabled={isWorking}
          >
            <option value="">-- اختر القسم --</option>
            {departments?.data?.map((dept) => (
              <option value={dept.id} key={dept.id}>
                {dept.name}
              </option>
            ))}
          </FilterSelect>
        </FilterContainer>
        <SearchContainer>
          <SearchInput
            placeholder="ابحث باستخدام اسم عضو هيئة التدريس..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={isWorking}
          />
          <StyledSearchIcon />
        </SearchContainer>
      </InfoContainer>

      {filteredTeachers.length > 0 ? (
        <>
          <EntityCount>
            <p>عدد أعضاء هيئة التدريس:</p>
            <p>{filteredTeachers.length}</p>
          </EntityCount>
          <ContentContainer>
            <ListHeader>
              <div>الإسم والرمز الجامعي</div>
              <div>القسم</div>
              <div>الوصف</div>
            </ListHeader>
            {/* Map over the paginated list */}
            {paginatedTeachers.map((teacher) => (
              <TeacherRow
                key={teacher.id}
                onClick={() => navigate(`edit-teacher/${teacher.id}`)}
              >
                <UserInfo>
                  <Avatar
                    src={`https://${teacher.avatar}`}
                    alt="teacher Avatar"
                  />
                  <UserName>{teacher.name}</UserName>
                  <UserId>({teacher.uni_code})</UserId>
                </UserInfo>
                <Department>{teacher.department}</Department>
                <Department>{teacher.description || "لا يوجد"}</Department>
                <ButtonsContainer>
                  <EditButton title="تعديل البيانات">
                    <CiEdit />
                  </EditButton>
                </ButtonsContainer>
              </TeacherRow>
            ))}
          </ContentContainer>

          {totalPages > 1 && (
            <PaginationContainer>
              <PaginationNavButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <GrFormPrevious />
                <span>السابق</span>
              </PaginationNavButton>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationButton
                    key={page}
                    active={page === currentPage}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </PaginationButton>
                )
              )}

              <PaginationNavButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <GrFormNext />
                <span>التالي</span>
              </PaginationNavButton>
            </PaginationContainer>
          )}
        </>
      ) : (
        <EmptyStateContainer>
          <h3>لا يوجد أعضاء هيئة تدريس يطابقون هذا البحث.</h3>
          <p>حاول تغيير الفلاتر أو قم بإضافة عضو هيئة تدريس جديد.</p>
        </EmptyStateContainer>
      )}
    </PageContainer>
  );
};

export default TeachersManagementContent;
