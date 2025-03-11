import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../ui/amr/Modal";
import ExamWindow from "./ExamWindow";

const ExamButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

function ExamModal({ onConfirm, onCloseModal }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="submit-exam">
          <ExamButton>
            <Button
              variation="danger"
              size="medium"
              style={{ outline: "none", width: "100%" }}
            >
              الإنهاء والتقديم
            </Button>
          </ExamButton>
        </Modal.Open>
        <Modal.Window name="submit-exam">
          <ExamWindow onConfirm={onConfirm} onCloseModal={onCloseModal} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ExamModal;
