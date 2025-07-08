import { useState, useMemo } from "react";
import useGetStudents from "./useGetStudents";
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
  ActionsContainer,
  ActionButton,
} from "./SharedStyles";
import useExportFileStudent from "./useExportFileStudent";

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

// Styles specific to this component
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
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  text-align: right;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
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
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Pagination = styled.div``;
const StudentsManagementContent = () => {
  const [semester, setSemester] = useState("");
  const [department, setDepartment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const page = 1;
  const { students, error, isPending, refetch } = useGetStudents(
    department,
    semester,
    page
  );
  const {
    data: departments,
    isPending: isLoading,
    error: errorDept,
    refetch: refetchDept,
  } = useGetDepartments();
  const { studentsFile } = useExportFileStudent();
  // console.log(studentsFile);
  const handleExport = () => {
    // studentsFile();
  };

  const handleImport = () => {
    alert("استيراد البيانات...");
  };

  const filteredStudents = useMemo(() => {
    if (!students?.data) return [];
    return students.data.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [students, searchQuery]);

  if (isPending || isLoading) return <Spinner />;

  if (error || errorDept) {
    return (
      <ErrorFallBack
        message={
          error?.message || errorDept?.message || "خطأ في تحميل البيانات"
        }
        onRetry={error ? refetch : refetchDept}
      />
    );
  }

  return (
    <PageContainer>
      <Header>
        <Title>إدارة الطلاب</Title>
        <ActionsContainer>
          <ActionButton
            onClick={() => navigate("create-student")}
            bgColor="#0d825b"
          >
            <FaPlus />
            <span>إضافة طالب</span>
          </ActionButton>
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
          <FilterSelect
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
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
            {filteredStudents.map((student) => (
              <StudentRow key={student.id}>
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
                  <EditButton
                    onClick={() => navigate(`edit-student/${student.id}`)}
                    title="تعديل بيانات الطالب"
                  >
                    <CiEdit />
                  </EditButton>
                </ButtonsContainer>
              </StudentRow>
            ))}
            <Pagination></Pagination>
          </ContentContainer>
        </>
      ) : (
        <EmptyStateContainer>
          <h3>لا يوجد طلاب يطابقون هذا البحث.</h3>
          <p>
            حاول تغيير الفلاتر أو قم بإضافة بعض الطلاب باستخدام الازار بالأعلي
            سواء عن طريق ملف او يدوي
          </p>
          {/* <ActionButton
            onClick={() => navigate("create-student")}
            bgColor="#0d825b"
          >
            <FaPlus />
            <span>إضافة طالب</span>
          </ActionButton> */}
        </EmptyStateContainer>
      )}
    </PageContainer>
  );
};

export default StudentsManagementContent;
