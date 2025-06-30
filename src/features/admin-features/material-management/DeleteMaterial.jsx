import styled from "styled-components";
import useDeleteMaterial from "./useDeleteMaterial";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 40rem;
`;

const H1 = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  font-weight: 600;
  color: var(--color-grey-800);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const ButtonBase = styled.button`
  outline: none;
  border: none;
  border-radius: 1rem;
  padding: 1rem 2.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  transition: all 0.2s;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

const Confirm = styled(ButtonBase)`
  background: var(--color-primary-green);
`;
const Cancel = styled(ButtonBase)`
  background: var(--color-danger-red);
`;

const DeleteMaterial = ({ id, onCloseModal, courseId }) => {
  const { mutate: deleting, isPending: isDeleting } =
    useDeleteMaterial(courseId);

  const handleDelete = () => {
    deleting(id, {
      onSuccess: () => onCloseModal?.(),
    });
  };

  return (
    <Container>
      <H1>هل أنت متأكد من حذف هذا المحتوى؟</H1>
      <ButtonsContainer>
        <Cancel onClick={onCloseModal}>الغاء</Cancel>
        <Confirm onClick={handleDelete} disabled={isDeleting}>
          تأكيد
        </Confirm>
      </ButtonsContainer>
    </Container>
  );
};

export default DeleteMaterial;
