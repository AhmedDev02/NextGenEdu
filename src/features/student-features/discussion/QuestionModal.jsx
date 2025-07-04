import styled from "styled-components";
import Button from "../../../ui/Button";
import Modal from "../../../ui/amr/Modal";
import QuestionWindow from "./QuestionWindow";
import { FaTrash } from "react-icons/fa";
import useDeleteQuestion from "./useDeleteQuestion";

const ExamButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

function QuestionModal({ onCloseModal, questionID }) {
  const { mutate: deleteQuestion, isPending } = useDeleteQuestion();
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
          <QuestionWindow
            onConfirm={() => deleteQuestion(questionID)}
            isLoading={isPending}
            onCloseModal={onCloseModal}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default QuestionModal;
