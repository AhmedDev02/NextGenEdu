import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import useShowQuiz from "./useShowQuiz";
import Spinner from "../../../../ui/amr/Spinner";
import ErrorFallBack from "../../../../ui/amr/ErrorFallBack";
import Empty from "../../../../ui/amr/Empty";

// --- Mock Data (Replace this with your actual API call) ---
// This simulates the data structure your API might return for a single quiz.
const mockQuizData = {
  id: 1,
  description:
    "يركز الاختبار على قدرة الطالب على إنشاء الدوال واستخدامها داخل الفئات (Classes) بشكل فعال، مع فهم كيفية تمرير البيانات (Parameters) وإرجاع القيم (Return Values).",
  start_time: "2024-10-31T00:59:00",
  end_time: "2024-10-31T01:14:00",
  questions: [
    {
      id: 101,
      text: "ما هي الوظيفة الأساسية للتغليف (Encapsulation) في البرمجة الشيئية؟",
      answers: [
        { id: 201, text: "السماح بالوراثة المتعددة", is_correct: 0 },
        {
          id: 202,
          text: "إخفاء الحالة الداخلية للكائن وحمايتها من الوصول غير المصرح به",
          is_correct: 1,
        },
        { id: 203, text: "زيادة سرعة تنفيذ الكود", is_correct: 0 },
      ],
    },
    {
      id: 102,
      text: "أي من التالي يعتبر مثالاً على تعدد الأشكال (Polymorphism)؟",
      answers: [
        {
          id: 204,
          text: "تعريف دالة بنفس الاسم في الفئة الأب والابن ولكن بسلوك مختلف",
          is_correct: 1,
        },
        {
          id: 205,
          text: "استخدام جملة `if-else` للتحقق من نوع الكائن",
          is_correct: 0,
        },
        { id: 206, text: "إنشاء كائن من فئة", is_correct: 0 },
        {
          id: 207,
          text: "تخزين البيانات في متغيرات خاصة (private)",
          is_correct: 0,
        },
      ],
    },
  ],
};

// --- Styled Components ---

const DetailsPageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  font-family: "Changa", sans-serif;
  color: #333;
`;

const InfoBox = styled.div`
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #4b5563;
  text-align: right;
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 20px 0;
`;

const TimeInfo = styled.p`
  text-align: right;
  font-size: 1rem;
  font-weight: 500;
  color: #1f2937;
`;

const SectionTitle = styled.h2`
  text-align: right;
  margin-top: 40px;
  margin-bottom: 20px;
  border-right: 4px solid #b82d42;
  padding-right: 15px;
`;

const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const QuestionBox = styled.div`
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
`;

const QuestionText = styled.h3`
  text-align: right;
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

const AnswerOption = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s;

  background-color: ${(props) => (props.isCorrect ? "#f0fdf4" : "transparent")};
  border-color: ${(props) => (props.isCorrect ? "#22c55e" : "#e5e7eb")};
  color: ${(props) => (props.isCorrect ? "#15803d" : "inherit")};
  font-weight: ${(props) => (props.isCorrect ? "600" : "normal")};
`;

function QuizDetails() {
  const { quizId } = useParams();
  const { quiz, isPending, error, refetch } = useShowQuiz(quizId);


  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack message="خطأ في عرض محتويات الاختبار" onRetry={refetch} />
    );
  }
  if (!quiz || quiz.data.length === 0) {
    return <Empty resourceName="معلومات" />;
  }

  return (
    <DetailsPageContainer>
      <InfoBox>
        <SectionTitle>وصف الإختبار</SectionTitle>
        <Description>{quiz.data.description}</Description>
        <Separator />
        <TimeInfo>يبدأ في: {quiz.data.start_time}</TimeInfo>
        <TimeInfo>مدة الاختبار {quiz.data.duration}د</TimeInfo>
      </InfoBox>

      <SectionTitle>الأسئلة والإجابات</SectionTitle>
      <QuestionListContainer>
        {quiz.data.questions.map((question, index) => (
          <QuestionBox key={question.id}>
            <QuestionText>{`${index + 1} - ${question.question}`}</QuestionText>
            <div>
              {question.answers.map((answer) => (
                <AnswerOption key={answer.id} isCorrect={answer.correct === 1}>
                  <span>{answer.answer}</span>
                  {answer.correct === 1 && <FaCheckCircle color="#22c55e" />}
                </AnswerOption>
              ))}
            </div>
          </QuestionBox>
        ))}
      </QuestionListContainer>
    </DetailsPageContainer>
  );
}

export default QuizDetails;
