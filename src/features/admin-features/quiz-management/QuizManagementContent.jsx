import styled from "styled-components";
import MyCard from "../../../ui/amr/MyCard";
import courses from "../material-management/courses";
import { FaHourglassEnd, FaPlus } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";

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
  return (
    <Container>
      {courses.map((element, index) => (
        <MyCard key={index} data={element} buttonsContent={buttonsContent} />
      ))}
    </Container>
  );
};

export default QuizManagementContent;
