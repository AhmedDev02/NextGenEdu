import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

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

function ExaminationQuestionsPage({ examDetails }) {
  const { questionText, answers, correctAnswer } = examDetails;
  const [searchParams, setSearchParams] = useSearchParams();
  const questionNumber = searchParams.get("questionNumber") || 1;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  return (
    <Div>
      <ExamQuestionDiv>
        <H4>Question {questionNumber}</H4>
        <ExamQuestion>{questionText}</ExamQuestion>
      </ExamQuestionDiv>
      <ExamAnswersUl>
        {answers.map((answer, index) => {
          const key = Object.keys(answer)[0]; // Extract "A", "B", "C", or "D"
          const value = answer[key]; // Extract the answer text
          return (
            <ExamAnswer
              key={index}
              selected={selectedAnswer === key}
              onClick={() => setSelectedAnswer(key)}
            >
              <Input
                type="radio"
                name="answer"
                checked={selectedAnswer === key}
                onChange={() => setSelectedAnswer(key)}
              />
              {`${key}) ${value}`}
            </ExamAnswer>
          );
        })}
      </ExamAnswersUl>
    </Div>
  );
}

export default ExaminationQuestionsPage;
