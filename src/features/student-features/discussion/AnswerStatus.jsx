import { FiThumbsUp } from "react-icons/fi";
import styled from "styled-components";
import { useLikeAnswer } from "./useLikeAnswer";
import { FaThumbsUp } from "react-icons/fa";
import CustomFaSpinner from "../../../ui/tharwat/CustomFaSpinner";

const StatNumber = styled.h5`
  color: ${({ first, liked }) =>
    first ? "#fff" : !liked ? "var(--color-secondary-darkblue)" : "#fff"};
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
  background-color: ${({ first, liked }) =>
    first
      ? "var(--color-green)"
      : !liked
      ? "#fff"
      : "var(--color-secondary-darkblue)"};
  border: 2px white solid;
  color: ${({ liked }) =>
    !liked ? "var(--color-secondary-darkblue)" : "#fff"};
  color: ${({ first }) => first && "#fff!important"};
  height: 90%;
  box-shadow: var(--shadow-primary);

  cursor: pointer;
  &:hover {
    box-shadow: var(--shadow-primary);
    transform: scale(1.04);
  }
`;

function AnswerStatus({ first, likes, answerID, liked }) {
  const { mutate, isPending } = useLikeAnswer(); // Destructure mutate from the hook

  const handleLike = () => {
    mutate({ answerID });
  };
  if (isPending) return <CustomFaSpinner />;
  return (
    <Div disabled={liked} liked={liked} onClick={handleLike} first={first}>
      <StatDiv>
        {liked ? <FaThumbsUp /> : <FiThumbsUp />}
        <StatNumber liked={liked} first={first}>
          {likes}
        </StatNumber>
      </StatDiv>
    </Div>
  );
}

export default AnswerStatus;
