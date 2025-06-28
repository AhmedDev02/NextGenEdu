import styled, { keyframes } from "styled-components";
import Button from "../../../ui/Button";
import { FaSpinner } from "react-icons/fa";

const StyledExamModal = styled.div`
  height: auto;
  width: 100%;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const H5 = styled.h5`
  text-align: center;
`;
const H4 = styled.h4`
  text-align: center;
`;
const Divider = styled.div`
  display: flex;
  justify-content: space-between;
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const SpinnerIcon = styled(FaSpinner)`
  font-size: 3rem;
  animation: ${spin} 1s linear infinite;
  vertical-align: middle;
`;

const text = `سيتم حذف جوابك بشكل نهائي`;

function AnswerWindow({ onCloseModal, onConfirm, isLoading }) {
  if (isLoading) return <SpinnerIcon />;
  return (
    <StyledExamModal>
      <H4> 🔔 تحذير </H4>
      <H5> {text}</H5>

      <Divider>
        <Button variation="danger" size="small" onClick={onConfirm}>
          تأكيد
        </Button>
        <Button variation="transparent" size="small" onClick={onCloseModal}>
          إلغاء
        </Button>
      </Divider>
    </StyledExamModal>
  );
}

export default AnswerWindow;
