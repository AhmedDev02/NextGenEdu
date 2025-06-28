import styled from "styled-components";
import QuestionDetails from "./QuestionDetails";
import AnswersContainer from "./AnswersContainer";
import { useParams } from "react-router-dom";
import { useReadOneQuestion } from "./useReadOneQuestion";
import { getStudentYear, getTimeFormatted } from "../../../utils/helpers";
import { useUser } from "../../../hooks/useUser";
import Spinner from "../../../ui/amr/Spinner";
import LoadedQuestionDetails from "./LoadedQuestionDetails";
import { useReadQuestions } from "./useReadQuestions";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  gap: 20px;
  @media (max-width: 768px) {
    max-width: 90%;

    display: flex;
    margin: 0 auto;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
  /* this is for tablets */
`;

function AnswersContent() {
  const { questionID } = useParams(); // `userId` is the parameter from the URL
  console.log(questionID);
  const { question, isLoading } = useReadOneQuestion(questionID) || {};
  const { questions: allQuestions, error } = useReadQuestions();

  const questionData = question?.data?.question;
  const answersData = question?.data?.answers;
  const { user } = useUser();
  const { id } = user;
  if (isLoading) return <Spinner />;
  return (
    <Div>
      {questionData ? (
        <QuestionDetails
          level={getStudentYear(questionData?.user?.semester)}
          name={questionData?.user?.name}
          date={questionData && getTimeFormatted(questionData?.createdAt)}
          question={questionData?.body}
          style={{ width: "100%" }}
          avatar={`https://${questionData?.user?.avatar}`}
        />
      ) : (
        <LoadedQuestionDetails
          loadedQuestionID={questionID}
          allQuestions={allQuestions}
        />
      )}

      <AnswersContainer questionID={questionID} id={id} answers={answersData} />
    </Div>
  );
}

export default AnswersContent;
