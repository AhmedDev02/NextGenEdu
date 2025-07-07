import { useState, useMemo } from "react";
import useGetTeachers from "./useGetTeachers";
import useGetDepartments from "../super-department-management/useGetDepartments";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import Spinner from "../../../ui/amr/Spinner";
import styled from "styled-components";
import { FaPlus, FaFileImport, FaFileExport } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

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
  AddButton,
  ActionsContainer,
  ActionButton,
} from "../super-students-management/SharedStyles";

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
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
  grid-template-columns: 3fr 2fr 1fr;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  text-align: right;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 1rem;
    text-align: center;
  }
`;

const TeachersManagementContent = () => {
  const [department, setDepartment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { teachers, error, isPending, refetch } = useGetTeachers(department);

  const {
    data: departments,
    isPending: isLoadingDepartments,
    error: errorDept,
  } = useGetDepartments();

  const handleExport = () => {
    alert("تصدير بيانات أعضاء هيئة التدريس...");
  };

  const handleImport = () => {
    alert("استيراد بيانات أعضاء هيئة التدريس...");
  };

  const filteredTeachers = useMemo(() => {
    if (!teachers?.data) return [];
    return teachers.data.filter((teacher) =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [teachers, searchQuery]);

  const isAnythingLoading = isPending || isLoadingDepartments;
  const anyError = error || errorDept;

  if (isAnythingLoading) return <Spinner />;

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
      <Header>
        <Title>إدارة أعضاء هيئة التدريس</Title>
        <ActionsContainer>
          <ActionButton onClick={handleImport} bgColor="#3b82f6">
            <FaFileImport />
            <span>استيراد ملف</span>
          </ActionButton>
          <ActionButton onClick={handleExport} bgColor="#10b981">
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
              <div>إجراءات</div>
            </ListHeader>
            {filteredTeachers.map((teacher) => (
              <TeacherRow key={teacher.id}>
                <UserInfo>
                  <UserName>{teacher.name}</UserName>
                  <UserId>({teacher.uni_code})</UserId>
                </UserInfo>
                <Department>{teacher.department}</Department>
                <ButtonsContainer>
                  <EditButton title="تعديل البيانات">
                    <CiEdit />
                  </EditButton>
                </ButtonsContainer>
              </TeacherRow>
            ))}
          </ContentContainer>
        </>
      ) : (
        <EmptyStateContainer>
          <h3>لا يوجد أعضاء هيئة تدريس يطابقون هذا البحث.</h3>
          <p>حاول تغيير الفلاتر أو قم بإضافة عضو هيئة تدريس جديد.</p>
          <AddButton onClick={() => navigate("add-teacher")}>
            <FaPlus size="2rem" />
            <span>إضافة عضو هيئة تدريس</span>
          </AddButton>
        </EmptyStateContainer>
      )}
    </PageContainer>
  );
};

export default TeachersManagementContent;
