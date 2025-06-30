import styled from "styled-components";
import Button from "../../../ui/Button";

const ConfirmationContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;

  p {
    color: var(--color-grey-800, #1f2937);
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
`;

function AnnouncementDeleteWindow({ onConfirm, onCloseModal, isDeleting }) {
  return (
    <ConfirmationContainer>
      <p>هل أنت متأكد من حذف الخبر؟ لا يمكن التراجع عن هذا الإجراء.</p>
      <ButtonGroup>
        <Button variation="secondary" onClick={onCloseModal}>
          إلغاء
        </Button>
        <Button disabled={isDeleting} variation="danger" onClick={onConfirm}>
          {isDeleting ? "يتم الحذف..." : "  تأكيد الحذف"}
        </Button>
      </ButtonGroup>
    </ConfirmationContainer>
  );
}

export default AnnouncementDeleteWindow;
