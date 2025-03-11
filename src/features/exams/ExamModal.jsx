import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../ui/amr/Modal";

const StyledExamModal = styled.div`
  height: auto;
  width: 100%;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExamButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H5 = styled.h5`
  text-align: center;
`;
const H4 = styled.h4`
  text-align: center;
`;
const text = `
                  هل أنت متأكد من أنك تريد إرسال جميع إجاباتك وإنهاء الكويز؟ تأكد من
              مراجعة جميع الأسئلة قبل الإرسال. اضغط "تأكيد" لإرسال الإجابات، أو
              "إلغاء" للعودة ومراجعتها.
`;
function ExamModal({ modalFn, closeModal }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="submit-exam">
          <ExamButton>
            <Button variation="primary" size="medium" onCLick={modalFn}>
              تأكيد
            </Button>
            <Button variation="transparent" size="medium" onCLick={closeModal}>
              إلغاء
            </Button>
          </ExamButton>
        </Modal.Open>
        <Modal.Window name="submit-exam">
          <StyledExamModal>
            <H4> 🔔 إرسال جميع الإجابات والإنهاء؟</H4>
            <H5> {text}</H5>
          </StyledExamModal>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ExamModal;
