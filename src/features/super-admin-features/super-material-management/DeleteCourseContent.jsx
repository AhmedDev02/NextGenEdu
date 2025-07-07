import styled, { css } from "styled-components";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useDeleteCourse from "./useDeleteCourse";
import { useQueryClient } from "@tanstack/react-query";

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

const DeleteCourseContent = ({ onCloseModal, courseId }) => {
  const { mutate, isPending } = useDeleteCourse();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const handleDelete = () => {
    mutate(courseId, {
      onSuccess: () => {
        toast.success("تم حذف المادة بنجاح");
        queryClient.invalidateQueries(["courses"]);
        navigate("/super-admin/materials");
      },
      onError: (err) => {
        toast.error(err.message || "حدث خطأ اثناء حذف المادة حاول مجددا");
      },
    });
  };
  return (
    <ConfirmationContainer>
      <p>هل أنت متأكد من حذف المادة لا يمكن التراجع عن هذا الإجراء.</p>
      <ButtonGroup>
        <Button
          disabled={isPending}
          variation="secondary"
          onClick={onCloseModal}
        >
          إلغاء
        </Button>
        <Button onClick={handleDelete} disabled={isPending} variation="danger">
          {isPending ? "يتم الحذف..." : "تأكيد الحذف"}
        </Button>
      </ButtonGroup>
    </ConfirmationContainer>
  );
};

export default DeleteCourseContent;
