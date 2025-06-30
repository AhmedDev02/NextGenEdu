import styled from "styled-components";
import ListFilter from "../../../ui/ListFilter";
import Button from "../../../ui/Button";
import Card from "../../../ui/Card";
import { useCourses } from "./useCourses";
import { useUser } from "../../../hooks/useUser";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";
import ErrorFallback from "../../../ui/amr/ErrorFallBack";
import Empty from "../../../ui/amr/Empty";

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
  const { courses, isLoading, error, refetch } = useCourses();
  const { user } = useUser();
  if (isLoading) return <Spinner />;
  if (error) {
    return (
      <ErrorFallback message="خطأ في عرض المواد الدراسية" onRetry={refetch} />
    );
  }
  if (!courses || courses.data.length === 0) {
    return <Empty resourceName="معلومات" />;
  }
  const coursesData = courses?.data;

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
            src={"/logo.png"}
            alt={"logo"}
            key={course.id}
            subjectName={course.name}
            doctorName={course.description}
            cardStyle={{ height: "auto" }}
            description={course.description}
          >
            <Button
              size="custom"
              paddingTopBottom="5px"
              variation="danger"
              margin=" 0 0 10px 0"
              navigateTo={`/admin/materials/show-materials/${course.id}`}
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
