import styled from "styled-components";
import PostManagement from "./PostManagement";
import Button from "../../../ui/Button";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "../../../ui/tharwat/Loader";
import ListFilterLocally from "../../../ui/ListFilterLocally";
import { useCourses } from "../dashboard/useCourses";
import { useAnnouncements } from "./useReadAnnouncements";

const Div = styled.div`
  display: flex;
  flex-direction: column;
width: 100%;
`;

const FilterDiv = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media (max-width: 768px) {
    min-width: 100%;
    justify-content: end;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Divider = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

function AdminNewsContent() {
  const { courses } = useCourses(); // Fetch courses
  const { announcements } = useAnnouncements(); // Fetch announcements
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    news: [],
    courses: [],
  });

  const [filters, setFilters] = useState({
    level: "",
    department: "",
  });

  useEffect(() => {
    if (announcements && courses) {
      setData({
        news: announcements, // Set news data
        courses: courses?.data || [], // Access courses.data if it exists, otherwise set an empty array
      });
    }
  }, [announcements, courses]); // Update data whenever announcements or courses change

  useEffect(() => {
    if (data.news.length > 0) {
      setFilters({
        level: data.news[0]?.semester?.id || "",
        department: data.news[0]?.department?.id || "",
      });
    }
  }, [data.news]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const filteredSemester = data.news.filter((newItem) => {
    return newItem.semester.id === +filters.level;
  });

  const mappedSemester = data.courses?.map((level) => {
    return { label: level.semester.name, value: `${level.semester.id}` };
  });

  const mappedDepartment = filteredSemester
    .filter((course) => course.department.id === +filters.department)
    .map((course) => ({
      label: course.department.name,
      value: `${course.department.id}`,
    }))
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.value === value.value) 
    );

  // Debugging output
  return (
    <>
      <FilterDiv>
        <Button
          size="custom"
          style={{ marginTop: "30px" }}
          paddingTopBottom="15px"
          navigateTo={"/admin/news/add"}
        >
          <FaPlus /> اضافة خبر جديد
        </Button>
        <Divider>
          <FilterContainer>
            <h3>إختر الفرقة</h3>
            <ListFilterLocally
              items={mappedSemester}
              containerStyles={{ padding: "10px" }}
              clickedValue={filters.level}
              onClickItem={(value) => handleFilterChange("level", value)}
            />
          </FilterContainer>
          <FilterContainer>
            <h3>أقسام الفرقة</h3>
            <ListFilterLocally
              items={mappedDepartment}
              containerStyles={{ padding: "10px" }}
              clickedValue={filters.department}
              onClickItem={(value) => handleFilterChange("department", value)} // Handle subjects filter click
            />
          </FilterContainer>
        </Divider>
      </FilterDiv>
      <Div>
        {!isLoading ? (
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
      </Div>
    </>
  );
}

export default AdminNewsContent;
