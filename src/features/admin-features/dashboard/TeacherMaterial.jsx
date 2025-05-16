import styled from "styled-components";
import ListFilter from "../../../ui/ListFilter";
import Button from "../../../ui/Button";
import Card from "../../../ui/Card";
import { useCourses } from "./useCourses";
import { useUser } from "../../../hooks/useUser";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
function TeacherMaterial() {
  // const data = [1, 2, 3];
  const { courses, isLoading, error } = useCourses();
  console.log(courses);
  const coursesData = courses?.data;
  const { user, token } = useUser();
  console.log(user?.semesters?.data);

  const semester = user?.semesters?.data?.map((semester) => {
    return { label: semester.name, value: semester.id };
  });

  return (
    <>
      <FilterDiv>
        <ListFilter
          items={semester}
          param={"semesters"}
          defaultItem={"first"}
        />
      </FilterDiv>
      <CardsContainer>
        {coursesData?.map((course) => (
          <Card
            src={"../../../../public/logo.png"}
            alt={"logo"}
            key={course.id}
            subjectName={course.name}
            doctorName={course.description}
            cardStyle={{ height: "auto" }}
          >
            <Button
              size="custom"
              paddingTopBottom="5px"
              variation="danger"
              margin=" 0 0 10px 0"
              navigateTo={`/admin/dashboard/${course.id}`}
            >
              عرض المنهج الدراسي
            </Button>
          </Card>
        ))}
      </CardsContainer>
    </>
  );
}

export default TeacherMaterial;
