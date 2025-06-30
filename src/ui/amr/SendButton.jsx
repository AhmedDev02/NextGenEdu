import styled from "styled-components";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const StyledSendButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%; 
  padding: 1.3rem 2rem;
  border-radius: 1rem;

  color: white;
  background: var(--color-primary-green);
  font-weight: 600;
  font-family: "Changa", sans-serif;
  font-size: 1.6rem;

  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;

  &:active {
    transform: scale(0.95);
    outline: none;
  }
  &:focus{
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 2.5rem;
    font-size: 1.4rem;
  }
`;

function SendButton({ title, type, onClick }) {
  return (
    <StyledSendButton type={type} onClick={onClick}>
      <span>{title}</span>
      <FaArrowUpRightFromSquare />
    </StyledSendButton>
  );
}

export default SendButton;
