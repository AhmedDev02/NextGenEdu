import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { clearAnswer, setAnswer } from "../../../store/answersSlice";

const Div = styled.div`
  direction: ltr;
  width: 100%;
`;
const ExamQuestionDiv = styled.div``;
const ExamQuestion = styled.div``;
const ExamAnswersUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const ExamAnswer = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #ccc;
  background: ${({ selected }) => (selected ? "#eef5ff" : "transparent")};
  color: ${({ selected }) => (selected ? "#000" : "#555")};

  input {
    cursor: pointer;
  }
`;
const H4 = styled.h4``;

const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;
  &:checked {
    background-color: #252e45; /* Dark blue */
  }
`;
function ExaminationQuestionsPage({ examQuestions, examId }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const questionNumber = Number(searchParams.get("questionNumber")) || 1;
  const dispatch = useDispatch();

  // ✅ Fix: define this before using it below
  const currentQuestion = examQuestions[questionNumber - 1];

  const selectedAnswer = useSelector(
    (state) => state.answers?.[examId]?.[currentQuestion?.id]
  );
  const isSubmitted = useSelector((state) => state.status?.[examId]?.submitted);

  const optionLabels = ["A", "B", "C", "D"];

  if (!currentQuestion) return <p>No question found.</p>;

  const handleSelect = (answerId) => {
    if (!isSubmitted) {
      dispatch(
        setAnswer({
          examId,
          questionId: currentQuestion.id,
          answerId,
        })
      );
    }
  };

  return (
    <Div>
      <ExamQuestionDiv>
        <H4>Question {questionNumber}</H4>
        <ExamQuestion>{currentQuestion?.question}</ExamQuestion>
      </ExamQuestionDiv>

      <ExamAnswersUl>
        {currentQuestion?.answers?.map((answer, index) => {
          const label = optionLabels[index] || `Option ${index + 1}`;
          return (
            <ExamAnswer
              key={answer.id}
              selected={selectedAnswer === answer.id}
              onClick={() => handleSelect(answer.id)}
            >
              <Input
                type="radio"
                name={`question-${currentQuestion.id}`}
                checked={selectedAnswer === answer.id}
                onChange={() => handleSelect(answer.id)}
                disabled={isSubmitted}
              />
              {`${label}) ${answer.answer}`}
            </ExamAnswer>
          );
        })}
      </ExamAnswersUl>
    </Div>
  );
}
export default ExaminationQuestionsPage;
