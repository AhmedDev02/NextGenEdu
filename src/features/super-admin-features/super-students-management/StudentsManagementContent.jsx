import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaPlus, FaFileImport, FaFileExport } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { toast } from "react-hot-toast";

import useGetStudents from "./useGetStudents";
import useGetDepartments from "../super-department-management/useGetDepartments";
import useExportFileStudent from "./useExportFileStudent";
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
} from "./SharedStyles";
import useImportFileStudents from "./useImportFileStudent";

const semesterTerms = [
  { label: "فرقة أعدادية / ترم اول", value: 1 },
  { label: "فرقة أعدادية / ترم ثاني", value: 2 },
  { label: "فرقة أولي / ترم اول", value: 3 },
  { label: "فرقة أولي / ترم ثاني", value: 4 },
  { label: "فرقة ثانية / ترم اول", value: 5 },
  { label: "فرقة ثانية / ترم ثاني", value: 6 },
  { label: "فرقة ثالثة / ترم اول", value: 7 },
  { label: "فرقة ثالثة / ترم ثاني", value: 8 },
  { label: "فرقة رابعة / ترم اول", value: 9 },
  { label: "فرقة رابعة / ترم ثاني", value: 10 },
];

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

const StudentRow = styled.div`
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
  direction: ltr; /* Set direction for correct button order */
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

// --- Component ---

const STUDENTS_PER_PAGE = 10;

const StudentsManagementContent = () => {
  const [semester, setSemester] = useState("");
  const [department, setDepartment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const { students, error, isPending, refetch } = useGetStudents(
    department,
    semester
  );

  const {
    data: departments,
    isPending: isLoading,
    error: errorDept,
  } = useGetDepartments();

  const { mutate: addFile, isPending: isAddingFile } = useImportFileStudents();

  const { exportFile, isExporting } = useExportFileStudent();

  const handleExport = async () => {
    if (isExporting) return;

    try {
      const blob = await exportFile();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "students.xlsx");
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

      addFile(formData, {
        onSuccess: () => {
          toast.success("تم رفع الملف بنجاح، جاري معالجة الطلاب");
          refetch();
        },
        onError: (err) => {
          toast.error(err.message || "فشل رفع الملف");
        },
      });
    }
  };

  // 1. Filter students by search query on the client-side
  const filteredStudents = useMemo(() => {
    if (!students?.data) return [];
    return students.data.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [students, searchQuery]);

  // 2. Calculate total pages based on the filtered list
  const totalPages = Math.ceil(filteredStudents.length / STUDENTS_PER_PAGE);

  // 3. Paginate the filtered list
  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * STUDENTS_PER_PAGE;
    const endIndex = startIndex + STUDENTS_PER_PAGE;
    return filteredStudents.slice(startIndex, endIndex);
  }, [filteredStudents, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [department, semester, searchQuery]);

  const isWorking = isPending || isLoading || isAddingFile;

  if (isPending || isLoading) return <Spinner />;

  if (error || errorDept) {
    return (
      <ErrorFallBack
        message={
          error?.message || errorDept?.message || "خطأ في تحميل البيانات"
        }
        onRetry={error ? refetch : refetch}
      />
    );
  }

  return (
    <PageContainer>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />

      <Header>
        <Title>إدارة الطلاب</Title>
        <ActionsContainer>
          <ActionButton
            onClick={() => navigate("create-student")}
            bgColor="#0d825b"
            disabled={isWorking}
          >
            <FaPlus />
            <span>إضافة طالب</span>
          </ActionButton>
          <ActionButton
            onClick={handleImportClick}
            bgColor="#3b82f6"
            disabled={isWorking}
          >
            <FaFileImport />
            <span>{isAddingFile ? "جاري الرفع..." : "استيراد ملف"}</span>
          </ActionButton>
          <ActionButton
            onClick={handleExport}
            bgColor="#10b981"
            disabled={isWorking}
          >
            <FaFileExport />
            <span>تصدير ملف</span>
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
          <FilterSelect
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            disabled={isWorking}
          >
            <option value="">-- اختر الفرقة / الترم --</option>
            {semesterTerms.map((sem) => (
              <option key={sem.value} value={sem.value}>
                {sem.label}
              </option>
            ))}
          </FilterSelect>
        </FilterContainer>
        <SearchContainer>
          <SearchInput
            placeholder="ابحث باستخدام اسم الطالب..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={isWorking}
          />
          <StyledSearchIcon />
        </SearchContainer>
      </InfoContainer>

      {filteredStudents.length > 0 ? (
        <>
          <EntityCount>
            <p>عدد الطلاب:</p>
            <p>{filteredStudents.length}</p>
          </EntityCount>
          <ContentContainer>
            <ListHeader>
              <div>الإسم والرمز الجامعي</div>
              <div>القسم</div>
              <div>الفرقة</div>
            </ListHeader>
            {/* Map over the paginated list */}
            {paginatedStudents.map((student) => (
              <StudentRow
                key={student.id}
                onClick={() => navigate(`edit-student/${student.id}`)}
              >
                <UserInfo>
                  <Avatar
                    src={`https://${student.avatar}`}
                    alt="Student Avatar"
                  />
                  <UserName>{student.name}</UserName>
                  <UserId>({student.uni_code})</UserId>
                </UserInfo>
                <Department>{student.department}</Department>
                <Department>{student.class}</Department>
                <ButtonsContainer>
                  <EditButton title="تعديل بيانات الطالب">
                    <CiEdit />
                  </EditButton>
                </ButtonsContainer>
              </StudentRow>
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
          <h3>لا يوجد طلاب يطابقون هذا البحث.</h3>
          <p>حاول تغيير الفلاتر أو قم بإضافة بعض الطلاب.</p>
        </EmptyStateContainer>
      )}
    </PageContainer>
  );
};

export default StudentsManagementContent;
