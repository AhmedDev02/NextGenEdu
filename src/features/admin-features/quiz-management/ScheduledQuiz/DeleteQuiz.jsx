import styled, { css } from "styled-components";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useDeleteQuiz from "./useDeleteQuiz";

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
      background-color: #ef4444;
      &:hover:not(:disabled) {
        background-color: #dc2626;
      }
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

const DeleteQuiz = ({ onCloseModal, quizId }) => {
  const { mutate, isPending: isDeleting } = useDeleteQuiz();
  const queryClient = useQueryClient();

  const handleDeleteQuiz = () => {
    mutate(quizId, {
      onSuccess: () => {
        toast.success("تم حذف الاختبار بنجاح");
        queryClient.invalidateQueries({ queryKey: ["quiz", quizId] });
        onCloseModal();
      },
      onError: (err) => {
        toast.error(err.message || "خطأ في حذف الاختبار حاول مجددا");
      },
    });
  };

  return (
    <ConfirmationContainer>
      <p>هل أنت متأكد من حذف الاختبار؟ لا يمكن التراجع عن هذا الإجراء.</p>
      <ButtonGroup>
        <Button
          variation="secondary"
          onClick={onCloseModal}
          disabled={isDeleting}
        >
          إلغاء
        </Button>
        <Button
          disabled={isDeleting}
          variation="danger"
          onClick={handleDeleteQuiz}
        >
          {isDeleting ? "يتم الحذف..." : "تأكيد الحذف"}
        </Button>
      </ButtonGroup>
    </ConfirmationContainer>
  );
};

export default DeleteQuiz;
