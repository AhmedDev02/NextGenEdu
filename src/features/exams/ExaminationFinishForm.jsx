import styled from "styled-components";
import Button from "../../ui/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/sideBarSlice";
import { useState } from "react";
import Modal from "../../ui/amr/Modal";
import ExamModal from "./ExamModal";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
const Reminder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Question = styled.div`
  width: 40%;
  padding: 10px;
  color: #000;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: var(--shadow-primary);
`;
const QuestionStat = styled.div`
  width: 40%;
  padding: 10px;
  color: #000;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: var(--shadow-primary);
`;

const H4 = styled.h4`
  font-size: 1.5rem;
`;

function ExaminationFinishForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const [examSubmit, setExamSubmit] = useState(false);
  const navigate = useNavigate();
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const finishExam = () => {
    setSearchParams({ finished: false });
  };
  const examIsFinished = () => {
    if (!isSidebarOpen) dispatch(toggleSidebar());
    navigate("/exams/");
  };

  return (
    <Div>
      <Reminder>
        <H4>
          مازال متبقي وقت، يمكنك العودة إلى انتهاء الوقت المحدد للإختبار !
        </H4>
        <Button variation="danger" navigateTo={-1} onCLick={() => finishExam()}>
          العودة إلى الإختبار!
        </Button>
      </Reminder>
      <Container>
        <Row>
          <Question
            style={{
              background: "var(--color-danger-red)",
              color: "#fff",
              boxShadow: "none",
            }}
          >
            السؤال
          </Question>
          <QuestionStat
            style={{
              background: "var(--color-danger-red)",
              color: "#fff",
              boxShadow: "none",
            }}
          >
            الحالة
          </QuestionStat>
        </Row>
        {data.map((question, index) => (
          <Row key={index}>
            <Question> السؤال رقم: {question}</Question>
            <QuestionStat
              style={{
                color: index === 3 || index === 8 ? "red" : "green",
              }}
            >
              {index !== 3 && index !== 8
                ? "تم حفظ الإجابة"
                : "لم يتم حفظ الإجابة"}
            </QuestionStat>
          </Row>
        ))}
      </Container>
      <Button
        variation="danger"
        size="medium"
        style={{ outline: "none" }}
        onClick={() => setExamSubmit((prev) => !prev)}
      >
        الإنهاء والتقديم
      </Button>

      <ExamModal
        modalFn={examIsFinished}
        closeModal={() => setExamSubmit((prev) => !prev)}
      />
    </Div>
  );
}

export default ExaminationFinishForm;
