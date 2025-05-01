import styled from "styled-components";
import Button from "../../../ui/Button";

const ModalContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: var(---shadow-primary);
  background-color: #fff;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
`;

const ModalButton = styled.button`
  background-color: #30bd58;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4b9f4f;
  }
`;

const WarningText = styled.p`
  color: red;
  font-weight: bold;
`;

function CourseMaterialDelete({ onConfirm, onCancel }) {
  return (
    <ModalContainer>
      <ModalContent>
        <WarningText>هل أنت متأكد من حذف المحتوى؟</WarningText>
        <div>
          <Button variation="primary" onClick={onConfirm}>
            تاكيد
          </Button>
          {/* <ModalButton onClick={onCancel}>الغاء</ModalButton> */}
        </div>
      </ModalContent>
    </ModalContainer>
  );
}

export default CourseMaterialDelete;
