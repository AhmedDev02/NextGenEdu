import styled from "styled-components";
import Modal from "../../ui/amr/Modal";
import SendButton from "../../ui/amr/sendButton";
import AddTaskModal from "./AddTaskModal";

const TaskAddButton = styled.div`
  width: clamp(50%, 80%, 90%);
  display: flex;
`;
function AddTask() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="add-task">
          <TaskAddButton>
            <SendButton width="27rem" height="6rem" title=" + اضافه للارسال" />
          </TaskAddButton>
        </Modal.Open>
        <Modal.Window name="add-task">
          <AddTaskModal />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddTask;
