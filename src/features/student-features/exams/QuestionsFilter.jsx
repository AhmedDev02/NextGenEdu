import styled from "styled-components";
import Button from "../../../ui/Button";
import { useSearchParams } from "react-router-dom";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: var(--shadow-primary);
  padding: 20px;
  border-radius: 10px;
  gap: 20px;
  width: 100%;
  margin-bottom: 10px;
`;
const Divider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
`;

const H3 = styled.h3`
  text-align: start;
`;
function QuestionsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const questionNumber = searchParams.get("questionNumber") || 1;
  const updateQuestion = (newQuestion) => {
    setSearchParams({ questionNumber: newQuestion });
  };
  const isFinished = searchParams.get("finished") || false;

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Div>
      <H3>التنقل في الاختبار</H3>
      <Divider>
        {data.map((question, index) => (
          <Button
            onClick={() => updateQuestion(question)}
            variation="transparent"
            size="small"
            key={index}
            style={{
              fontSize: "1.5rem",
              background: !isFinished
                ? question > questionNumber
                  ? "transparent"
                  : +question === +questionNumber
                  ? "var(--color-primary-green)"
                  : "var(--color-secondary-darkblue)"
                : "var(--color-secondary-darkblue)",
              color: !isFinished
                ? question > questionNumber
                  ? "var(--color-secondary-darkblue)"
                  : "#fff"
                : "#fff",

              border: "none",
              outline: "none",
            }}
          >
            {question}
          </Button>
        ))}
      </Divider>
    </Div>
  );
}

export default QuestionsFilter;
