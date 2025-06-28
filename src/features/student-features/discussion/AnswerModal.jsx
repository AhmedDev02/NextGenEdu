import styled from "styled-components";
import Button from "../../../ui/Button";
import Modal from "../../../ui/amr/Modal";
import { FaTrash } from "react-icons/fa";
import AnswerWindow from "./AnswerWindow";
import useDeleteAnswer from "./useDeleteAnswer";

const ExamButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

function AnswerModal({ onCloseModal, answerID }) {
  const { mutate: deleteAnswer, isPending: isLoading } = useDeleteAnswer();
  console.log(isLoading);
  return (
    <div>
      <Modal>
        <Modal.Open opens="submit-delete">
          <ExamButton>
            <Button
              variation="danger"
              size="custom"
              paddingLeftRight="10px"
              style={{ borderRadius: "15px", border: "2px white solid" }}
              disabled={isLoading}
            >
              <FaTrash
                style={{
                  fontSize: "2rem",
                }}
              />
            </Button>
          </ExamButton>
        </Modal.Open>
        <Modal.Window name="submit-delete">
          <AnswerWindow
            onConfirm={() => deleteAnswer(answerID)}
            onCloseModal={onCloseModal}
            isLoading={isLoading}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AnswerModal;
