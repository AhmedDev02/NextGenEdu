import styled from "styled-components";
import PervExam from "./PervExam";
import NextExam from "./NextExam";

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
  return (
    <Div>
      <PrevExamsDiv>
        <PervExam />
        <PervExam />
        <PervExam />
      </PrevExamsDiv>
      <Divider />
      <NextExamsDiv>
        <NextExam
          examGoal={
            " يركز الاختبار على قدرة الطالب على إنشاء الدوال واستخدامها داخل الفئات (Classes) بشكل فعال، مع فهم كيفية تمرير البيانات (Parameters) وإرجاع القيم (Return Values)."
          }
          startTime={"الخميس 31 أكتوبر 2024 ، الساعة 12:59 صباحاً"}
          endTime={"الخميس 31 أكتوبر 2024 ، الساعة 01:14 صباحاً"}
        />
      </NextExamsDiv>
    </Div>
  );
}

export default MaterialExamContent;
