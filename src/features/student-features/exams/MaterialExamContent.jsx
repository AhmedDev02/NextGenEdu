import styled from "styled-components";
import PervExam from "./PervExam";
import NextExam from "./NextExam";
import { useReadQuizzes } from "./useReadQuizzes";
import { useParams } from "react-router-dom";
import Spinner from "../../../ui/amr/Spinner";
import ScheduledExams from "./ScheduledExams";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 800px;
  gap: 10px;
  @media (max-width: 1024px) and (min-width: 769px) {
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 40px;
  }
`;
const PrevExamsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
const NextExamsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Divider = styled.div`
  width: 80%;
  border: 2px solid var(--color-grey-600);
  margin: 10px 0;
`;
function MaterialExamContent() {
  const { exams: data, isPending } = useReadQuizzes();

  const exams = data?.data;
  console.log(exams);
  const { examId: courseId } = useParams();

  const filteredFinishedExams = exams?.filter(
    (exam) => +exam?.course?.id === +courseId && exam?.status === "finished"
  );
  console.log(filteredFinishedExams);
  const filteredScheduledExams = exams?.filter(
    (exam) => +exam?.course?.id === +courseId && exam?.status === "scheduled"
  );
  const filteredStartedExams = exams?.filter(
    (exam) => +exam?.course?.id === +courseId && exam?.status === "started"
  );

  console.log(filteredScheduledExams, filteredStartedExams);
  // console.log(filteredStartedExams[0].start_time);

  if (isPending) {
    <Spinner />;
  }
  return (
    <Div>
      <NextExamsDiv>
        {filteredStartedExams?.map((startedExam) => {
          console.log(startedExam);
          return (
            <NextExam
              examId={courseId}
              key={startedExam.id}
              startedExam={startedExam}
              examGoal={
                " يركز الاختبار على قدرة الطالب على إنشاء الدوال واستخدامها داخل الفئات (Classes) بشكل فعال، مع فهم كيفية تمرير البيانات (Parameters) وإرجاع القيم (Return Values)."
              }
              startTime={"الخميس 31 أكتوبر 2024 ، الساعة 12:59 صباحاً"}
              endTime={"الخميس 31 أكتوبر 2024 ، الساعة 01:14 صباحاً"}
            />
          );
        })}
      </NextExamsDiv>
      <Divider />
      <PrevExamsDiv>
        {filteredScheduledExams?.map((scheduledExams, index) => {
          return <ScheduledExams ScheduledExams={scheduledExams} key={index} />;
        })}
      </PrevExamsDiv>
      <PrevExamsDiv>
        {filteredFinishedExams?.map((finishedExam, index) => {
          return <PervExam finishedExam={finishedExam} key={index} />;
        })}
      </PrevExamsDiv>
    </Div>
  );
}

export default MaterialExamContent;
