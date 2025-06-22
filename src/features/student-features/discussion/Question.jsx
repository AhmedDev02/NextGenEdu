import styled from "styled-components";
import Button from "../../../ui/Button";
import QuestionStatus from "./QuestionStatus";
import QuestionDetails from "./QuestionDetails";
import { FiThumbsUp } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import QuestionModal from "./QuestionModal";

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
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;
const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 72%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: ${({ isUser }) => isUser && "space-between"};
    gap: 10px;
    min-height: 30px;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
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

function Question({ interested, isUser }) {
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
        <QuestionStatus likes={49} answers={10} watch={100} />
      </QuestionsDiv>
      <ButtonsDiv isUser={isUser}>
        {isUser && <QuestionModal />}
        <Button
          variation="secondary"
          size="custom"
          paddingLeftRight={isUser ? "208px" : "258px"}
          paddingTopBottom="10px"
          style={{ borderRadius: "15px", border: "2px white solid" }}
          navigateTo={`/discussion/1`}
          phonePadding={isUser ? "10px 30px" : "10px 90px"}
          tabPadding={!isUser ? "15px 267px" : "10px 200px"}
        >
          عرض الإجابة
        </Button>
        <Button
          variation={interested ? "primary" : "transparent"}
          size="custom"
          paddingLeftRight="65px"
          paddingTopBottom="17px"
          phonePadding={isUser ? "10px 30px" : "10px 80px"}
          tabPadding={"20px 65px"}
          // tabPadding={!isUser ? "20px 65px" : "10px 80px"}
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
