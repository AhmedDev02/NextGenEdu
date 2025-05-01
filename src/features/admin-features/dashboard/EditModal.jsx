import styled from "styled-components";
import Modal from "../../../ui/amr/Modal";
import Button from "../../../ui/Button";
import CourseMaterialForm from "./CourseMaterialForm";

const ButtonDiv = styled.div``;

function EditModal({ selectedRow, onConfirm, onCloseModal, onClick, week }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="edit-material">
          <ButtonDiv onClick={() => onClick(week)}>
            <Button variation="primary" size="custom" paddingLeftRight="10px">
              تعديل
            </Button>
          </ButtonDiv>
        </Modal.Open>
        <Modal.Window name="edit-material">
          <CourseMaterialForm
            onConfirm={onConfirm}
            onCloseModal={onCloseModal}
            selectedRow={selectedRow}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default EditModal;
