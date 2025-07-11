import styled from "styled-components";
import Button from "../../../ui/Button";
import CustomFaSpinner from "../../../ui/tharwat/CustomFaSpinner";

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
const text = `سيتم حذف سؤالك بشكل نهائي`;

function QuestionWindow({ onCloseModal, onConfirm, isLoading }) {
  if (isLoading) return <CustomFaSpinner />;

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

export default QuestionWindow;
