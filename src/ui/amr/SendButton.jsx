import styled from "styled-components";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const StyledSendButton = styled.button`
  width: ${({ width }) => width || "100px"};
  height: ${({ height }) => height || "40px"};
  border: 2px solid gray;
  border-radius: 1rem;
  cursor: pointer;
  color: white;
  border: none;
  outline: none;
  background: var(--color-primary-green);
  font-weight: 600;
  font-family: "Changa";
  transition: all 0.2s;
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 8rem;
    height: 3rem;
    font-size: 0.9rem;
  }
  &:active {
    scale: 0.9;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function SendButton({ width, height, title, type }) {
  return (
    <StyledSendButton width={width} height={height} type={type}>
      <Div>
        {title}
        <FaArrowUpRightFromSquare />
      </Div>
    </StyledSendButton>
  );
}

export default SendButton;
