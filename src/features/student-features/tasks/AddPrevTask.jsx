import Modal from "../../../ui/amr/Modal";
import SendButton from "../../../ui/amr/SendButton";
import AddTaskModal from "./AddTaskModal";

function AddPrevTask({ AssId, type }) {
  return (
    <Modal>
      <Modal.Open opens="add-task">
        <div>
          <SendButton
            type="secondary"
            width="10rem"
            height="4rem"
            title={type === "update" ? "تعديل" : "ارسال"}
          />
        </div>
      </Modal.Open>
      <Modal.Window name="add-task">
        <AddTaskModal AssId={AssId} />
      </Modal.Window>
    </Modal>
  );
}

export default AddPrevTask;
