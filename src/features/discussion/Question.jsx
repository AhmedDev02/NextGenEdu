import styled from "styled-components";
import Button from "../../ui/Button";
import QuestionStatus from "./QuestionStatus";
import QuestionDetails from "./QuestionDetails";
import { FiThumbsUp } from "react-icons/fi";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const QuestionsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Span = styled.span`
  display: inline-block;
  margin: 0 10px;
`;
const Break = styled.div`
  width: 80%;
  border: 1px solid var(--color-secondary-darkblue);
  margin: 5px auto;
`;

function Question({ liked }) {
  return (
    <Div>
      <QuestionsDiv>
        <QuestionDetails
          level={"الثانية"}
          name={"احمد ثروت رفاعي"}
          date={"2022-01-01"}
          question={
            "كيف يمكنني تحسين أداء كود في لغة البرمجة بايثون عند التعامل مع البيانات الكبيرة؟"
          }
        />
        <QuestionStatus likes={49} answers={10} />
      </QuestionsDiv>
      <ButtonsDiv>
        <Button
          variation="secondary"
          size="custom"
          paddingLeftRight="258px"
          paddingTopBottom="10px"
          style={{ borderRadius: "15px", border: "2px white solid" }}
        >
          عرض الإجابة
        </Button>
        <Button
          variation={liked ? "primary" : "transparent"}
          size="custom"
          paddingLeftRight="65px"
          paddingTopBottom="17px"
        >
          <Span>مهتم</Span>
          <FiThumbsUp />
        </Button>
      </ButtonsDiv>

      <Break />
    </Div>
  );
}

export default Question;
