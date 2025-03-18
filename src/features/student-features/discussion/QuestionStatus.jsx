import { FiFileText, FiThumbsUp } from "react-icons/fi";
import styled from "styled-components";

const Stat = styled.h5`
  color: #fff;
`;
const StatNumber = styled.h5`
  color: #fff;
`;

const StatDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  padding: 0 40px;
  border-radius: 20px;
  background-color: var(--color-secondary-darkblue);
  border: 2px white solid;
  min-height: 160px;
  @media (max-width: 768px) {
    width: 75%;
    flex-direction: row;
    min-height: 40px;
    padding: 0 10px;
    border-radius: 14px;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;

const Span = styled.span`
  font-size: 1.4rem;
  color: #fff;
`;

function QuestionStatus({ likes, answers }) {
  return (
    <Div>
      <Span>إحصائيات هذا السؤال </Span>
      <StatDiv>
        <FiThumbsUp style={{ color: "#fff" }} />
        <StatNumber>{likes}</StatNumber>
        <Stat>مهتم</Stat>
      </StatDiv>
      <StatDiv>
        <FiFileText style={{ color: "#fff" }} />
        <StatNumber>{answers}</StatNumber>
        <Stat>إجابة</Stat>
      </StatDiv>
    </Div>
  );
}

export default QuestionStatus;
