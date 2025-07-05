import styled from "styled-components";
import Button from "../../../ui/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../../store/sideBarSlice";
import ExamModal from "./ExamModal";
import { markSubmitted } from "../../../store/statusSlice";

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

function ExaminationFinishForm({ questions, examId }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const navigate = useNavigate();
  const answers = useSelector((state) => state.answers?.[examId] || {});

  const finishExam = () => {
    navigate(-1);
    setSearchParams({ finished: false });
  };

  const examIsFinished = () => {
    dispatch(markSubmitted({ examId }));
    if (!isSidebarOpen) dispatch(toggleSidebar());
    navigate("/exams/");
  };

  return (
    <Div>
      <Reminder>
        <H4>
          مازال متبقي وقت، يمكنك العودة إلى انتهاء الوقت المحدد للإختبار !
        </H4>
        <Button variation="danger" onClick={() => finishExam()}>
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
        {questions.map((q, index) => {
          const answered = String(q.id) in answers;
          return (
            <Row key={q.id}>
              <Question>السؤال رقم: {index + 1}</Question>
              <QuestionStat style={{ color: answered ? "green" : "red" }}>
                {answered ? "تم حفظ الإجابة" : "لم يتم حفظ الإجابة"}
              </QuestionStat>
            </Row>
          );
        })}
      </Container>

      <ExamModal answers={answers} onConfirm={() => examIsFinished()} />
    </Div>
  );
}

export default ExaminationFinishForm;
