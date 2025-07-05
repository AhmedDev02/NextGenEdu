import styled from "styled-components";
import Button from "../../../ui/Button";
import { useSubmitQuiz } from "./useSubmitQuiz";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledExamModal = styled.div`
  height: auto;
  width: 100%;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const H5 = styled.h5`
  text-align: center;
`;
const H4 = styled.h4`
  text-align: center;
`;
const Divider = styled.div`
  display: flex;
  justify-content: space-between;
`;
const text = `
                  هل أنت متأكد من أنك تريد إرسال جميع إجاباتك وإنهاء الكويز؟ تأكد من
              مراجعة جميع الأسئلة قبل الإرسال. اضغط "تأكيد" لإرسال الإجابات، أو
              "إلغاء" للعودة ومراجعتها.
`;

function ExamWindow({ onCloseModal, onConfirm, answers }) {
  const { examId } = useParams();
  const allAnswers = useSelector((state) => state.answers?.[examId] || {});
  const { mutate: submitQuiz, isPending, isSuccess, error } = useSubmitQuiz();

  const handleSubmit = () => {
    const formattedAnswers = Object.entries(answers).map(
      ([questionId, answerId]) => ({
        question: questionId,
        answer: answerId,
      })
    );

    submitQuiz(
      { quizId: examId, answers: formattedAnswers },
      {
        onSuccess: () => {
          onConfirm?.(); // Optional callback
        },
        onError: (err) => {
          console.error("Submission failed", err);
        },
      }
    );
  };
  return (
    <StyledExamModal>
      <H4> 🔔 إرسال جميع الإجابات والإنهاء؟</H4>
      <H5> {text}</H5>
      <Divider>
        <Button variation="primary" size="small" onClick={handleSubmit}>
          تأكيد
        </Button>
        <Button variation="transparent" size="small" onClick={onCloseModal}>
          إلغاء
        </Button>
      </Divider>
    </StyledExamModal>
  );
}

export default ExamWindow;
