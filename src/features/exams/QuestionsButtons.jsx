import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";

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
`;

function QuestionsButtons() {
  const [searchParams, setSearchParams] = useSearchParams();
  const questionNumber = searchParams.get("questionNumber") || 1;
  // const isFinished = searchParams.get("finished") || false;
  const updateQuestion = (newQuestion) => {
    setSearchParams({ questionNumber: newQuestion });
  };

  const finishExam = () => {
    setSearchParams({ finished: true });
  };
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        onClick={() => console.log("question")}
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
