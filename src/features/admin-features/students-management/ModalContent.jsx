import toast from "react-hot-toast";
import styled from "styled-components";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 3rem;
  align-items: center;
  p {
    font-size: 3rem !important;
    font-weight: bold;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 3rem;
`;
const Sure = styled.button`
  background: var(--color-primary-green);
  border: none;
  border-radius: 2rem;
  padding: 1rem 3rem;
  color: white;
  font-family: "Changa", sans-serif;
  font-size: 2rem !important;
  &:active {
    outline: none;
    transition: all 0.1s linear;
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
`;
const Cancel = styled(Sure)`
  background: var(--color-danger-red);
`;
const ModalContent = ({ onCloseModal, id, handleResetDegree, onSelectRow }) => {
  const { handleEdit } = useStudentProgressContext();

  const handleClick = () => {
    onCloseModal();
    handleEdit(id);
    toast.success("تم تعديل الدرجه بنجاح");
    onSelectRow(id);
  };
  const handleCancel = () => {
    onCloseModal();
    handleResetDegree();
    handleEdit(id);
    onSelectRow(id);
    toast.error("تم الغاء التعديل");
  };
  return (
    <Container>
      <p>هل تريد تعديل الدرجه ؟</p>
      <Buttons>
        <Sure onClick={handleClick}>تأكيد</Sure>
        <Cancel onClick={handleCancel}>الغاء</Cancel>
      </Buttons>
    </Container>
  );
};

export default ModalContent;
