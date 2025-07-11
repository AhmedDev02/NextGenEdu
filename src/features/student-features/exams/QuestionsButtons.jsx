import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../ui/Button";
import { useDispatch } from "react-redux";
import { clearAnswer } from "../../../store/answersSlice";

const Div = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: var(--shadow-primary);
  padding: 20px;
  border-radius: 10px;
  gap: 20px;
  width: 100%;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 40px;
    /* display: none; */
  }
`;

function QuestionsButtons({ questions, examId }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const questionNumber = searchParams.get("questionNumber") || 1;
  // const isFinished = searchParams.get("finished") || false;
  const updateQuestion = (newQuestion) => {
    setSearchParams({ questionNumber: newQuestion });
  };
  const dispatch = useDispatch();
  const currentQuestion = questions[questionNumber - 1];

  const handleClear = () => {
    dispatch(
      clearAnswer({
        examId,
        questionId: currentQuestion.id,
      })
    );
  };

  const finishExam = () => {
    setSearchParams({ finished: true });
  };

  const data = questions;
  return (
    <Div>
      <Button
        onClick={() => updateQuestion(+questionNumber - 1)}
        variation="transparent"
        size="medium"
        style={{
          fontSize: "1.5rem",
          outline: "none",
        }}
        disabled={+questionNumber === 1}
      >
        السابق
      </Button>
      <Button
        onClick={handleClear}
        variation="secondary"
        size="medium"
        style={{
          fontSize: "1.5rem",
          //   border: "none",
          outline: "none",
        }}
      >
        حذف تحديد الإجابة
      </Button>
      {+questionNumber === +data.length ? (
        <Button
          variation="danger"
          size="medium"
          style={{
            fontSize: "1.5rem",
            outline: "none",
          }}
          onClick={() => finishExam()}
        >
          الإنهاء
        </Button>
      ) : (
        <Button
          onClick={() => updateQuestion(+questionNumber + 1)}
          variation="transparent"
          size="medium"
          style={{
            fontSize: "1.5rem",
            outline: "none",
          }}
          disabled={+questionNumber === +data.length}
        >
          التالي
        </Button>
      )}
    </Div>
  );
}

export default QuestionsButtons;
