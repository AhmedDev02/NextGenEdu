import { IoBookOutline, IoSearch } from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import useGetCourses from "./useGetCourses";
import SuperCard from "../../../ui/amr/superAdmin/SuperCard";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import useGetDepartments from "../super-department-management/useGetDepartments";
import { useState, useMemo } from "react";
import { CiEdit } from "react-icons/ci";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2.5rem;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #1f2937;
`;

const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #0d825b;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(13, 130, 91, 0.2);

  &:hover {
    background-color: #0a6847;
    transform: translateY(-2px);
  }
`;

// --- ✨ New Container for Filters & Search ---
const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap-reverse; /* Puts filters on the right on wrap */
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 12px;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07);
`;

const SearchContainer = styled.div`
  position: relative;
  flex-grow: 1;
  min-width: 250px;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  padding: 0.75rem 2.5rem 0.75rem 1rem; // Left padding for icon
  transition: all 0.2s ease;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px #dcfce7;
  }
`;

const StyledSearchIcon = styled(IoSearch)`
  position: absolute;
  top: 50%;
  left: 0.85rem;
  transform: translateY(-50%);
  color: #9ca3af;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FilterSelect = styled.select`
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #fff;
  color: #374151;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: #10b981;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const AddCourseCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #fff;
  border: 2px dashed #10b981;
  color: #10b981;
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-height: 300px;
  font-size: 1.1rem;
  font-weight: 600;

  &:focus {
    outline: 2px solid #10b981;
    outline-offset: 4px;
  }

  &:hover,
  &:focus {
    background-color: #f0fdf4;
    border-style: solid;
    color: #065f46;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-4px);
  }
`;

const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  flex-direction: column;
  gap: 1rem;
  color: #4b5563;
  text-align: center;
`;

const Buttons = [
  {
    label: "عرض تفاصيل المادة",
    logo: <IoBookOutline size={20} />,
    state: "page with id",
    path: "course-details-display",
    variation: "primary",
    size: "medium",
  },
  {
    label: "تعديل تفاصيل المادة",
    logo: <CiEdit size={20} />,
    state: "page with id",
    path: "update-course",
    variation: "primary",
    size: "medium",
  },
];

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

const SuperMaterialContent = () => {
  const [semester, setSemester] = useState("");
  const [department, setDepartment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { courses, isPending, error, refetch } = useGetCourses(
    department,
    semester
  );
  const {
    data: departments,
    isPending: isLoading,
    error: errorDept,
    refetch: refetchDept,
  } = useGetDepartments();
  const navigate = useNavigate();

  const filteredCourses = useMemo(() => {
    if (!courses?.data) return [];
    return courses.data.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [courses?.data, searchQuery]);

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
        <Title>المواد الدراسية</Title>
        <AddButton onClick={() => navigate("add-course")}>
          <FaPlus />
          <span>إضافة مادة</span>
        </AddButton>
      </Header>

      <SubHeader>
        <SearchContainer>
          <StyledSearchIcon size={20} />
          <SearchInput
            placeholder="ابحث باستخدام اسم المادة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>
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
      </SubHeader>

      {filteredCourses.length > 0 ? (
        <CourseGrid>
          {filteredCourses.map((course) => (
            <SuperCard key={course.id} data={course} Buttons={Buttons} />
          ))}
          <AddCourseCard onClick={() => navigate("add-course")}>
            <FaPlus />
            <span>إضافة مادة جديدة</span>
          </AddCourseCard>
        </CourseGrid>
      ) : (
        <EmptyStateContainer>
          <h3>لا توجد مواد دراسية تطابق هذا البحث.</h3>
          <p>حاول تغيير الفلاتر أو قم بإضافة مادة دراسية جديدة.</p>
        </EmptyStateContainer>
      )}
    </PageContainer>
  );
};

export default SuperMaterialContent;
