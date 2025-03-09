import Modal from "../../ui/amr/Modal";
import SendButton from "../../ui/amr/sendButton";
import AddTaskModal from "./AddTaskModal";

function AddPrevTask() {
  return (
    <Modal>
      <Modal.Open opens="add-task">
        <div>
          <SendButton
            type="secondary"
            width="14rem"
            height="6rem"
            title="اضغط للارسال"
          />
        </div>
      </Modal.Open>
      <Modal.Window name="add-task">
        <AddTaskModal />
      </Modal.Window>
    </Modal>
  );
}

export default AddPrevTask;
