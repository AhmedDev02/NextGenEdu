import styled from "styled-components";

const StyledSendButton = styled.button`
  width: ${({ width }) => width || "100px"};
  height: ${({ height }) => height || "40px"};
  border: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
  color: white;
  border: none;
  outline: none;
  background: var(--color-primary-green);
  font-weight: 600;
  font-size: 2.5rem;
  transition: all 0.1s;
  ${({ type }) =>
    type === "secondary" &&
    `
      position: absolute;
      left: 5rem;
      top: 50%;
      transform: translateY(-50%);
    `}

  &:focus {
    outline: none;
  }
  &:active {
    transform: ${({ type }) =>
      type === "secondary" ? "translateY(-50%) scale(0.9)" : "scale(0.95)"};
  }
`;
function SendButton({ width, height, title, type }) {
  return (
    <StyledSendButton width={width} height={height} type={type}>
      {title}
    </StyledSendButton>
  );
}

export default SendButton;
