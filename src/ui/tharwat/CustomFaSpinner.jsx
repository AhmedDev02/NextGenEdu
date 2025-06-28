import { FaSpinner } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

// 1. Define the spin keyframe
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// 2. Add animation to your styled spinner
const StyledCustomFaSpinner = styled(FaSpinner)`
  display: flex;
  align-items: center;
  justify-self: center;
  align-self: center;
  text-align: center;
  margin: 0 auto;
  font-size: ${({ size }) => size || "2rem"};
  animation: ${spin} ${({ speed }) => speed || "1s"} linear infinite;
`;

function CustomFaSpinner({ size, speed }) {
  return <StyledCustomFaSpinner size={size} speed={speed} />;
}
export default CustomFaSpinner;
