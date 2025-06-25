import styled from "styled-components";
import ListFilter from "../../../ui/ListFilter";
import Button from "../../../ui/Button";
import Card from "../../../ui/Card";
import { useCourses } from "./useCourses";
import { useUser } from "../../../hooks/useUser";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";

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
  const { user } = useUser();
  if (isLoading) return <Spinner />;
  if (error) return toast.error("حدث خطأ أثناء تحميل البيانات");
  const coursesData = courses?.data;
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
