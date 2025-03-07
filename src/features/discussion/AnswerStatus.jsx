import { FiThumbsUp } from "react-icons/fi";
import styled from "styled-components";

const StatNumber = styled.h5`
  color: #fff;
`;

const StatDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  border-radius: 20px;
  background-color: ${({ first }) =>
    first ? "var(--color-green)" : "var(--color-secondary-darkblue)"};
  border: 2px white solid;
  height: 90%;
  cursor: pointer;
  &:hover {
    box-shadow: var(--shadow-primary);
    transform: scale(1.04);
  }
`;

function AnswerStatus({ first, likes }) {
  return (
    <Div onClick={() => console.log("clicked")} first={first}>
      <StatDiv>
        <FiThumbsUp style={{ color: "#fff" }} />
        <StatNumber>{likes}</StatNumber>
      </StatDiv>
    </Div>
  );
}

export default AnswerStatus;
