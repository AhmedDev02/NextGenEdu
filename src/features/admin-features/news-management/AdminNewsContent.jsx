import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "../../../ui/tharwat/Loader";
import { useCourses } from "../dashboard/useCourses";
import { useAnnouncements } from "./useReadAnnouncements";
import Spinner from "../../../ui/amr/Spinner";
import { useNavigate } from "react-router-dom";
import Empty from "../../../ui/amr/Empty";
import PostManagement from "./PostManagement";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";

const AdminPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const TopActionsContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
  align-items: center;

  @media (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const AddNewsButton = styled.button`
  background: var(--color-primary-green);
  color: white;
  width: 50%;
  padding: 1.2rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: none;
  border-radius: 1.2rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;
  &:focus,
  &:active {
    outline: none;
  }
  &:active {
    scale: 0.95;
  }

  @media (min-width: 768px) {
    width: auto;
    min-width: 22rem;
  }
`;

const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

function AdminNewsContent() {
  const { courses } = useCourses();
  const { announcements, isPending, error, refetch } = useAnnouncements();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({ news: [], courses: [] });
  const [filters, setFilters] = useState({ level: "", department: "" });

  useEffect(() => {
    if (announcements && courses) {
      setData({
        news: announcements,
        courses: courses?.data || [],
      });
    }
  }, [announcements, courses]);

  useEffect(() => {
    if (data.news.length > 0) {
      setFilters({
        level: data.news[0]?.semester?.id || "",
        department: data.news[0]?.department?.id || "",
      });
    }
  }, [data.news]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const filteredSemester = data.news.filter(
    (newItem) => newItem.semester.id === +filters.level
  );

  const mappedSemester = data.courses
    ?.map((level) => ({
      label: level.semester.name,
      value: `${level.semester.id}`,
    }))
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.value === value.value)
    );

  const mappedDepartment = data.courses
    ?.filter((course) => course.semester.id === +filters.level)
    .map((course) => ({
      label: course.department.name,
      value: `${course.department.id}`,
    }))
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.value === value.value)
    );

  if (isPending) return <Spinner />;
  if (error) {
    return <ErrorFallBack message="خطأ في تحميل الاخبار" onRetry={refetch} />;
  }
  if (!announcements || announcements.length === 0) {
    return (
      <>
        <AddNewsButton onClick={() => navigate("/admin/news/add")}>
          <span>اضافة خبر جديد</span>
          <FaPlus />
        </AddNewsButton>
        <Empty resourceName="معلومات" />
      </>
    );
  }

  return (
    <AdminPageLayout>
      <TopActionsContainer>
        <AddNewsButton onClick={() => navigate("/admin/news/add")}>
          <span>اضافة خبر جديد</span>
          <FaPlus />
        </AddNewsButton>
        {/* <FiltersWrapper>
          <FilterContainer>
            <h3>إختر الفرقة</h3>
            <ListFilterLocally
              items={mappedSemester}
              clickedValue={filters.level}
              onClickItem={(value) => handleFilterChange("level", value)}
            />
          </FilterContainer>
          <FilterContainer>
            <h3>أقسام الفرقة</h3>
            <ListFilterLocally
              items={mappedDepartment}
              clickedValue={filters.department}
              onClickItem={(value) => handleFilterChange("department", value)}
            />
          </FilterContainer>
        </FiltersWrapper> */}
      </TopActionsContainer>

      <PostsContainer>
        {!announcements || announcements.length === 0 ? (
          <Empty resourceName="أخبار" />
        ) : !isLoading ? (
          filteredSemester.map((newItem) => (
            <PostManagement
              key={newItem.id}
              postInformation={newItem}
              notice={"أي حد هيتأخر هيتنفخ"}
            />
          ))
        ) : (
          <Loader />
        )}
      </PostsContainer>
    </AdminPageLayout>
  );
}

export default AdminNewsContent;
