import styled from "styled-components";
import Modal from "../../../ui/amr/Modal";
import AddTaskModal from "./AddTaskModal";
import SendButton from "../../../ui/amr/SendButton";

const AddTaskContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 30rem; 

  @media (max-width: 768px) {
    max-width: 100%; 
  }
`;

function AddTask() {
  return (
    <AddTaskContainer>
      <Modal>
        <Modal.Open opens="add-task">
          <ButtonWrapper>
            <SendButton title="أضف مهمة جديدة +" />
          </ButtonWrapper>
        </Modal.Open>
        <Modal.Window name="add-task">
          <AddTaskModal />
        </Modal.Window>
      </Modal>
    </AddTaskContainer>
  );
}

export default AddTask;
