import styled from "styled-components";
import LastTasks from "./LastTasks";
import AddTask from "./AddTask";

const Container = styled.div`
  max-width: 100rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem;
    gap: 1.5rem;
  }
`;

const TaskDetailsTitle = styled.div`
  width: 90%;
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: bold;
  text-align: right;
`;

const TaskDetails = styled.div`
  width: 90%;
  background-color: white;
  height: auto;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TaskGoal = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid gray;
  font-size: clamp(1.4rem, 1.8vw, 1.8rem);
  font-weight: 600;
  padding-bottom: 1rem;
`;

const TaskDate = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StartDate = styled.div`
  font-size: clamp(1.6rem, 2vw, 2rem);
  font-weight: bold;
`;

const EndDate = styled(StartDate)``;

function TaskPageContent() {
  return (
    <Container>
      <LastTasks week="اسايمنت الاسبوع الأول" title="اسايمنت 1" status={true} />
      <LastTasks week="اسايمنت الاسبوع الثاني" title="اسايمنت 2 " />
      <TaskDetailsTitle>
        <p>تفاصيل المهمه الجديده</p>
      </TaskDetailsTitle>
      <TaskDetails>
        <TaskGoal>
          <p>
            يركز الاختبار علي قدرة الطالب علي انشاء دوال واستخدامها داخل الفئات
            (classes) بشكل فعال. مع فهم كيفية تمرير البايانات (parameters )
            وارجاع القيم (return values)
          </p>
        </TaskGoal>
        <TaskDate>
          <StartDate>
            <p>يبدأ في : الخميس 31 اكتوبر الساعه 11.59 صباحا</p>
          </StartDate>
          <EndDate>
            <p>ينتهي في : الخميس 07 نوفمبر الساعه 11.59 صباحا</p>
          </EndDate>
        </TaskDate>
      </TaskDetails>
      <AddTask />
    </Container>
  );
}

export default TaskPageContent;
