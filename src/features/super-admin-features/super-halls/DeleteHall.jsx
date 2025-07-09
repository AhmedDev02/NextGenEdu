import { useNavigate } from "react-router-dom";
import useDeleteHall from "./useDeleteHall";
import toast from "react-hot-toast";
import styled, { css } from "styled-components";

const ConfirmationContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2rem;
  border-radius: 12px;
  p {
    color: #374151;
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;
    margin: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
`;

const Button = styled.button`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.2rem 2.4rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: white;

  ${(props) =>
    props.variation === "danger" &&
    css`
      background: var(--color-danger-red);
    `}

  ${(props) =>
    props.variation === "secondary" &&
    css`
      background-color: #ffffff;
      color: #374151;
      border: 1px solid #d1d5db;
      &:hover:not(:disabled) {
        background-color: #f9fafb;
      }
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    background-color: #e5e7eb;
    color: #6b7280;
    border-color: #d1d5db;
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;
const DeleteHall = ({ onCloseModal, hallId }) => {
  const { deletingHall, isDeleting } = useDeleteHall();
  const navigate = useNavigate();
  const handleDelete = () => {
    deletingHall(hallId, {
      onSuccess: () => {
        toast.success("تم حذف المبني بنجاح");
        navigate("/super-admin/halls");
      },
      onError: (err) => {
        toast.error(err.message || "حدث خطأ اثناء حذف المبني");
      },
    });
  };
  return (
    <ConfirmationContainer>
      <p>هل أنت متأكد من حذف القاعه لا يمكن التراجع عن هذا الإجراء.</p>
      <ButtonGroup>
        <Button
          disabled={isDeleting}
          variation="secondary"
          onClick={onCloseModal}
        >
          إلغاء
        </Button>
        <Button onClick={handleDelete} disabled={isDeleting} variation="danger">
          {isDeleting ? "يتم الحذف..." : "تأكيد الحذف"}
        </Button>
      </ButtonGroup>
    </ConfirmationContainer>
  );
};

export default DeleteHall;
