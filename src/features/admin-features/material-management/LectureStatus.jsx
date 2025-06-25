import { BsCalendar2Check } from "react-icons/bs";
import styled from "styled-components";
import Button from "../../../ui/Button";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";
import toast from "react-hot-toast";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: clamp(20rem, 30vw, 40rem);
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const P = styled.p`
  font-size: 2.5rem !important;
  font-weight: bold;
`;
const Description = styled.div`
  display: flex;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;
const LectureStatus = ({ onCloseModal, lectureId }) => {
  const { lectureStatuses, setLectureStatus } = useStudentProgressContext();
  const [selectedStatus, setSelectedStatus] = useState(
    lectureStatuses[lectureId] || "في موعدها"
  );

  function handleChange(newStatus) {
    if (newStatus === lectureStatuses[lectureId]) {
      toast.error("الحالة لم تتغير!");
      return;
    }

    setLectureStatus(lectureId, newStatus);
    toast.success("تم تحديث حالة المحاضرة بنجاح");
    onCloseModal();
  }

  return (
    <Container>
      <Title>
        <P>
          <BsCalendar2Check />
        </P>
        <P>تحديث حالة المحاضرة!</P>
      </Title>
      <Description>
        <p>اختر حالة المحاضرة بناءا علي وضعها الحالي....</p>
      </Description>
      <InputContainer>
        <InputWrap>
          <input
            type="radio"
            id="inTime"
            name="lectureStatus"
            value="في موعدها"
            checked={selectedStatus === "في موعدها"}
            onChange={() => setSelectedStatus("في موعدها")}
          />
          <label htmlFor="inTime">في موعدها (تلقائي)</label>
        </InputWrap>
        <InputWrap>
          <input
            type="radio"
            id="late"
            name="lectureStatus"
            value="تم التأجيل"
            checked={selectedStatus === "تم التأجيل"}
            onChange={() => setSelectedStatus("تم التأجيل")}
          />
          <label htmlFor="late">تأجيل</label>
        </InputWrap>
      </InputContainer>

      <ButtonsContainer>
        <Button
          variation="primary"
          onClick={() => handleChange(selectedStatus)}
        >
          تأكيد
        </Button>
        <Button variation="danger" onClick={onCloseModal}>
          الغاء
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default LectureStatus;
