import styled from "styled-components";
import useDeleteMaterial from "./useDeleteMaterial";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;
`;
const H1 = styled.h1``;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Confirm = styled.button`
  background: var(--color-primary-green);
  outline: none;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  transition: all 0.1s;
  &:active {
    scale: 0.9;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;
const Cancel = styled(Confirm)`
  background: var(--color-danger-red);
`;
const P = styled.p`
  color: white;
`;
const DeleteMaterial = ({ id, onCloseModal,courseId }) => {
  const { mutate: deleting, isPending: isDeleting } = useDeleteMaterial(courseId);
  const handleDelete = () => {
    deleting(id);
    onCloseModal();
  };
  return (
    <Container>
      <H1>هل أنت متأكد من حذف هذا المحتوى؟</H1>
      <ButtonsContainer>
        <Confirm onClick={handleDelete} disabled={isDeleting}>
          <P>تأكيد</P>
        </Confirm>
        <Cancel>
          <P>الغاء</P>
        </Cancel>
      </ButtonsContainer>
    </Container>
  );
};

export default DeleteMaterial;
