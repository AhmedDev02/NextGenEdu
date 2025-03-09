import styled from "styled-components";
import LastTasks from "./LastTasks";
import AddTask from "./AddTask";

const Container = styled.div`
  height: 100dvh;
  width: 80dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const TaskDetailsTitle = styled.div`
  width: clamp(50%, 80%, 90%);
  font-size: 2.5rem;
  font-weight: bold;
`;
const TaskDetails = styled.div`
  width: clamp(50%, 80%, 90%);
  background-color: white;
  height: auto;
  padding: 4rem;
  border-radius: 2rem;
`;
const TaskGoal = styled.div`
  width: 100%;
  height: 8rem;
  border-bottom: 1px solid gray;
  font-size: 2rem;
  font-weight: 600;
`;
const TaskDate = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const StartDate = styled.div`
  font-size: 3rem;
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
