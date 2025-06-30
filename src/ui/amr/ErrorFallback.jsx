// src/ui/ErrorFallback.jsx

import styled from "styled-components";
import PropTypes from "prop-types";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import toast from "react-hot-toast";

const StyledErrorFallBack = styled.div`
  width: 90%;
  max-width: 70rem;
  margin: 4rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  background-color: var(--color-grey-50, #f9fafb);
  border: 1px solid var(--color-red-200, #fecaca);
  border-radius: var(--border-radius-md, 7px);
  padding: 2.5rem;
  text-align: center;
  color: var(--color-grey-700, #374151);

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const ErrorIcon = styled(HiOutlineExclamationTriangle)`
  width: 6rem;
  height: 6rem;
  color: var(--color-red-500, #ef4444);

  @media (min-width: 768px) {
    width: 7rem;
    height: 7rem;
  }
`;

const Title = styled.h3`
  font-size: 1.8rem; /* Adjusted base font size */
  font-weight: bold;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin: 0;
  color: var(--color-grey-600, #4b5563);

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const RetryButton = styled.button`
  background: var(--color-primary-green, #10b981);
  border: none;
  border-radius: var(--border-radius-md, 7px);
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.2s;

  &:active {
    scale: 0.95;
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

function ErrorFallBack({ message = "لم نستطع عرض المعلومات", onRetry }) {
  // This side-effect will show a toast notification in addition to the component
  message && toast.error(message);

  return (
    <StyledErrorFallBack>
      <ErrorIcon />
      <Title>عفواً، حدث خطأ ما</Title>
      <Message>{message}</Message>
      {onRetry && <RetryButton onClick={onRetry}>حاول مجدداً</RetryButton>}
    </StyledErrorFallBack>
  );
}

ErrorFallBack.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func,
};

export default ErrorFallBack;
