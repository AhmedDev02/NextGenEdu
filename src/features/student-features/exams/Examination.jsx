import { useEffect, useState } from "react";
import ContentHeader from "../../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../../utils/constants";
import ExaminationContent from "./ExaminationContent";
import { useParams } from "react-router-dom";
import { useStartQuiz } from "./useStartQuiz";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setEndTime } from "../../../store/timersSlice";
import { setSubmitted } from "../../../store/statusSlice";

function Examination() {
  const { examId } = useParams();
  console.log(examId);
  const { exam: data } = useStartQuiz(examId);
  console.log(data);
  const dispatch = useDispatch();
  const reduxEndTime = useSelector((state) => state.timers[examId]?.endTime);

  const [timeLeft, setTimeLeft] = useState(null);
  const questions = data?.data?.questions ?? [];

  useEffect(() => {
    if (!data?.data) return;

    const { duration, start_time, date, id } = data.data;
    const examStart = dayjs(`${date}T${start_time}`);
    const examEnd = examStart.add(duration, "minute");
    const now = dayjs();

    // Calculate actual remaining time
    const remainingSeconds = examEnd.diff(now, "second");

    if (remainingSeconds <= 0) {
      // Exam already expired
      setTimeLeft(0);
      dispatch(setSubmitted({ examId: id, value: true }));
      return;
    }

    // Save to Redux/localStorage if needed
    const storedEnd = examEnd.toISOString();
    localStorage.setItem(`exam-${id}-end-time`, storedEnd);
    dispatch(setEndTime({ examId: id, endTime: storedEnd }));

    const interval = setInterval(() => {
      const now = dayjs();
      const remaining = examEnd.diff(now, "second");

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
        dispatch(setSubmitted({ examId: id, value: true }));
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [data?.data?.id]);

  const formatTime = (totalSeconds) => {
    if (totalSeconds == null) return "--:--";
    const mins = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (totalSeconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.EXAMINATION.title}
        subject={data?.data?.course?.name ?? "البرمجة الكونية"}
        button={false}
      />
      <ExaminationContent
        examId={examId}
        questions={questions}
        timeLeft={formatTime(timeLeft)}
        examData={data?.data}
      />
    </>
  );
}

export default Examination;
