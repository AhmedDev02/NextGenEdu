import styled from "styled-components";
import Button from "../../../ui/Button";
import Modal from "../../../ui/amr/Modal";
import AddQuestionModalWindow from "./AddQuestionModalWindow";
import { FiPlus } from "react-icons/fi";

const ExamButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

function AddQuestionModal({ onConfirm, onCloseModal }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="submit-question">
          <ExamButton>
            <Button
              size="custom"
              paddingLeftRight="30px"
              paddingTopBottom="10px"
              fontSize="1.4rem"
              style={{ paddingBottom: "15px" }}
              phonePadding={"5px 10px"}
            >
              <FiPlus style={{ fontSize: "1.4rem" }} />
              ضف سؤالك
            </Button>
          </ExamButton>
        </Modal.Open>
        <Modal.Window name="submit-question">
          <AddQuestionModalWindow
            onConfirm={onConfirm}
            onCloseModal={onCloseModal}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddQuestionModal;
