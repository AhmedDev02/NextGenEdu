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

const WarningText = styled.p`
  color: red;
  font-weight: bold;
`;

function AssignmentDeleteWindow({ onConfirm }) {
  return (
    <ModalContainer>
      <ModalContent>
        <WarningText>هل أنت متأكد من حذف التكليف؟</WarningText>
        <div>
          <Button variation="primary" onClick={onConfirm}>
            تاكيد
          </Button>
        </div>
      </ModalContent>
    </ModalContainer>
  );
}

export default AssignmentDeleteWindow;
