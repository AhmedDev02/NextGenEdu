import styled from "styled-components";
import MyCard from "../../../ui/amr/MyCard";
import courses from "../material-management/courses";
import { FaHourglassEnd, FaPlus } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import useGetCourses from "../material-management/useGetCourses";
import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import Empty from "../../../ui/amr/Empty";

const Container = styled.div`
  margin: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 7rem;
  flex-wrap: wrap;
`;

const buttonsContent = [
  {
    label: "انشاء كويزات",
    logo: <FaPlus />,
    variation: "primary",
    state: "page",
    path: "quizzes/create-quizzes",
  },
  {
    label: "كويزات مجدوله",
    logo: <LuClock3 />,
    variation: "primary",
    state: "page",
    path: "quizzes/scheduled-quizzes",
  },
  {
    label: "كويزات سابقه",
    logo: <FaHourglassEnd />,
    variation: "danger",
    state: "page",
    path: "quizzes/old-quizzes",
  },
];
const QuizManagementContent = () => {
  const { courses, isPending, error, refetch } = useGetCourses();
  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack message="خطأ في عرض المواد الدراسية" onRetry={refetch} />
    );
  }
  if (!courses || courses.data.length === 0) {
    return <Empty resourceName="معلومات" />;
  }
  return (
    <Container>
      {courses.data.map((element, index) => (
        <MyCard key={index} data={element} buttonsContent={buttonsContent} />
      ))}
    </Container>
  );
};

export default QuizManagementContent;
