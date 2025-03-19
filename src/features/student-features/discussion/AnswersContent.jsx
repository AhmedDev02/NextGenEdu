import styled from "styled-components";
import QuestionDetails from "./QuestionDetails";
import AnswersContainer from "./AnswersContainer";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  gap: 20px;
  @media (max-width: 768px) {
    max-width: 90%;

    display: flex;
    margin: 0 auto;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
  /* this is for tablets */
`;

function AnswersContent() {
  return (
    <Div>
      <QuestionDetails
        level={"الثانية"}
        name={"احمد ثروت رفاعي"}
        date={"2022-01-01"}
        question={
          "كيف يمكنني تحسين أداء كود في لغة البرمجة بايثون عند التعامل مع البيانات الكبيرة؟"
        }
        style={{ width: "100%" }}
      />
      <AnswersContainer
        level={"الثانية"}
        name={"احمد ثروت رفاعي"}
        date={"2022-01-01"}
        answer={
          "لتحسين أداء كود بايثون مع البيانات الكبيرة، استخدم NumPy و Pandas لمعالجة البيانات بكفاءة، Dask أو Vaex للتعامل مع البيانات الضخمة، multiprocessing و Numba لتسريع العمليات، chunksize عند قراءة الملفات، وParquet أو Feather بدلاً من CSV لتقليل استهلاك الذاكرة. "
        }
        isUser={true}
      />
    </Div>
  );
}

export default AnswersContent;
