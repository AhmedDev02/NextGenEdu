import styled from "styled-components";

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
  transition: all 0.1s ease-in-out;

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
      type === "secondary" ? "translateY(-50%) scale(0.9)" : "scale(0.9)"};
  }

  @media (max-width: 768px) {
    width: ${({ type }) => (type === "secondary" ? "8rem" : "14rem")};
    height: ${({ type }) => (type === "secondary" ? "4rem" : "4rem")};
    font-size: 0.9rem;

    &:active {
      transform: ${({ type }) =>
        type === "secondary" ? "translateY(0) scale(0.9)" : "scale(0.95)"};
    }

    ${({ type }) =>
      type === "secondary" &&
      `
        position: static;
        transform: none;
        margin-top: 1rem;
      `}
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
