import styled from "styled-components";

const Div = styled.div`
  width: 100%;
`;
const ExamQuestionDiv = styled.div``;
const ExamQuestion = styled.div``;
const ExamAnswersUl = styled.ul``;
const ExamAnswer = styled.li``;
const H4 = styled.h4``;

function ExaminationQuestionsPage() {
  return (
    <Div>
      <ExamQuestionDiv>
        <H4>Question 1</H4>
        <ExamQuestion></ExamQuestion>
      </ExamQuestionDiv>
      <ExamAnswersUl>
        <ExamAnswer></ExamAnswer>
      </ExamAnswersUl>
    </Div>
  );
}

export default ExaminationQuestionsPage;
