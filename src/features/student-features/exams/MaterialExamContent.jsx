import styled from "styled-components";
import PervExam from "./PervExam";
import NextExam from "./NextExam";
import { useReadQuizzes } from "./useReadQuizzes";
import { useParams } from "react-router-dom";
import Spinner from "../../../ui/amr/Spinner";
import ScheduledExams from "./ScheduledExams";
import { FaRegMeh } from "react-icons/fa";

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
const NoExamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  margin-top: 50px;
  background-color: #f0f8ff; /* لون أزرق فاتح جداً */
  border-radius: 12px;
  border: 1px solid #cce5ff; /* حدود زرقاء فاتحة */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.8em; /* حجم خط أكبر */
    color: #0056b3; /* لون أزرق داكن */
    margin-top: 20px;
    margin-bottom: 0;
    font-weight: bold;
  }

  .icon {
    font-size: 3.5em; /* حجم كبير للأيقونة */
    color: #66b3ff; /* لون أزرق فاتح للأيقونة */
  }
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
      {filteredStartedExams.length !== 0 ? (
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
      ) : (
        <NoExamsContainer>
          <FaRegMeh className="icon" />
          <h3>لم يبدأ أي إمتحان</h3>
        </NoExamsContainer>
      )}

      <Divider />
      <PrevExamsDiv>
        {filteredScheduledExams?.map((scheduledExams, index) => {
          return <ScheduledExams scheduledExams={scheduledExams} key={index} />;
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
