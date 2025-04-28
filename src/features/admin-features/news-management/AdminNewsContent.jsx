import styled from "styled-components";
import ListFilter from "../../../ui/ListFilter";
import PostManagement from "./PostManagement";
import Button from "../../../ui/Button";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import { BASE_URL } from "../../../utils/apiConstant";
import axiosInstance from "../../../services/api/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import Loader from "../../../ui/tharwat/Loader";
import { useSelector } from "react-redux";
import courses from "../material-management/courses";
import ListFilterLocally from "../../../ui/ListFilterLocally";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 80%;
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
  const user = useSelector((state) => state.auth.user); // Get the user from Redux store
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    news: [],
    courses: [],
  });

  console.log(data);
  //level -> الفرقة الثالثة
  // department -> هندسة صناعية
  const [filters, setFilters] = useState({
    level: data?.news?.semester?.id || "", // Default to an empty string or any fallback value
    department: data?.news?.department?.id || "", // Default to an empty string or any fallback value
  });

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const announcementEndpoint = BASE_URL + "/dashboard/my-announcements";
      const coursesEndpoint = BASE_URL + "/teachers/courses";

      const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${user.token}`,
      };

      // Use Promise.all to fetch both resources in parallel
      const [announcementResponse, coursesResponse] = await Promise.all([
        axiosInstance.get(announcementEndpoint, { headers }),
        axiosInstance.get(coursesEndpoint, { headers }),
      ]);

      // Update the state once both requests have completed
      setData({
        news: announcementResponse.data.data.data,
        courses: coursesResponse.data.data,
      });
    } catch (error) {
      // Use a single function to handle errors
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  }, [user.token]); // Dependency array includes user.token to re-fetch data when it changes

  const handleError = (error) => {
    if (error.response) {
      toast.error(error.response?.data?.message || error.message);
    } else {
      toast.error("An error occurred");
    }
  };

  useEffect(() => {
    if (user.token) {
      fetchData(); // Fetch data only if user.token is available
    }
  }, [user.token, fetchData]); // Trigger fetchData when user.token changes
  useEffect(() => {
    if (data.news.length > 0) {
      setFilters({
        level: data?.news[0]?.semester?.id || "",
        department: data?.news[0]?.department?.id || "",
      });
    }
  }, [data.news]);
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };
  console.log(filters, data);

  const filteredSemester = data.news.filter((newItem) => {
    return newItem.semester.id === +filters.level;
  });
  console.log(filteredSemester);

  const mappedSemester = data?.courses?.map((level) => {
    return { label: level.semester.name, value: `${level.semester.id}` };
  });
  console.log(mappedSemester);

  const test = filteredSemester.filter(
    (course) => course.department.id === +filters.department
  );
  console.log(test);
  const mappedDepartment = filteredSemester
    .filter((course) => course.department.id === +filters.department) // Filter by selected department
    .map((course) => ({
      label: course.department.name, // department name as the label
      value: `${course.department.id}`, // department id as the value
    }))
    .filter(
      (
        value,
        index,
        self // Remove duplicates
      ) => index === self.findIndex((t) => t.value === value.value) // Ensure uniqueness based on department id
    );

  console.log(mappedDepartment);

  return (
    <>
      <FilterDiv>
        <Button
          size="custom"
          style={{ marginTop: "30px" }}
          paddingTopBottom="15px"
          navigateTo={"/admin/news/add"}
        >
          <FaPlus /> خبر جديد!
        </Button>
        <Divider>
          <FilterContainer>
            <h3>إختر الفرقة</h3>
            <ListFilterLocally
              items={mappedSemester}
              containerStyles={{ padding: "10px" }}
              clickedValue={filters.level}
              onClickItem={(value) => handleFilterChange("level", value)} // Handle level filter click
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
          filteredSemester.map((newItem, index) => (
            <PostManagement
              key={index}
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
