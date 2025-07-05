import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import useGetStudentAnswers from "./useGetStudentAnswers";
import Spinner from "../../../../ui/amr/Spinner";
import ErrorFallBack from "../../../../ui/amr/ErrorFallBack";
import Empty from "../../../../ui/amr/Empty";


const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  font-family: "Changa", sans-serif;
  color: #333;
  direction: rtl;
`;

const SectionTitle = styled.h2`
  text-align: right;
  margin-top: 40px;
  margin-bottom: 20px;
  border-right: 4px solid #4f46e5;
  padding-right: 15px;
  font-size: 1.5rem;
`;

const QuestionBox = styled.div`
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
`;

const QuestionText = styled.h3`
  text-align: right;
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

const AnswerOption = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 2px solid transparent;

  background-color: #f9fafb;


  ${(props) =>
    props.isCorrect &&
    `
    border-color: #22c55e;
    background-color: #f0fdf4;
    color: #15803d;
    font-weight: 600;
  `}


  ${(props) =>
    props.isSelected &&
    !props.isCorrect &&
    `
    border-color: #ef4444;
    background-color: #fef2f2;
    color: #b91c1c;
    font-weight: 600;
  `}
`;

function StudentAnswers() {
  const { quizId, studentId } = useParams();
  const { data, isPending, error, refetch } = useGetStudentAnswers(
    quizId,
    studentId
  );

  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack message="خطأ في عرض اجابات الطالب" onRetry={refetch} />
    );
  }

  if (
    !data ||
    !data.data ||
    !data.data.questions ||
    data.data.questions.length === 0
  ) {
    return <Empty resourceName="معلومات" />;
  }

  const studentAnswersData = data.data;

  return (
    <PageContainer>
      <SectionTitle>
        إجابات الطالب: {studentAnswersData.student_name} (
        {studentAnswersData.student_id})
      </SectionTitle>

      {studentAnswersData.questions.map((question, index) => (
        <QuestionBox key={question.id}>
          <QuestionText>{`${index + 1} - ${question.question}`}</QuestionText>
          <div>
            {question.answers.map((answer) => {
              const isCorrect = answer.correct === 1;
              const isSelectedByStudent = answer.id === question.student_answer;

              return (
                <AnswerOption
                  key={answer.id}
                  isCorrect={isCorrect}
                  isSelected={isSelectedByStudent}
                >
                  <span>{answer.answer}</span>
                  {isSelectedByStudent && !isCorrect && (
                    <FaTimesCircle color="#ef4444" />
                  )}
                  {isCorrect && <FaCheckCircle color="#22c55e" />}
                </AnswerOption>
              );
            })}
          </div>
        </QuestionBox>
      ))}
    </PageContainer>
  );
}

export default StudentAnswers;
