import styled from "styled-components";
import { getStudentYear, getTimeFormatted } from "../../../utils/helpers";

const QuestionContainer = styled.div`
  background: #fff;
  flex-grow: 1;
  padding: 20px;
  border-radius: 20px;
  min-height: 160px;
  min-width: 100%;
  border: 2px solid var(--color-secondary-darkblue);
  @media (max-width: 768px) {
    width: 75%;
    flex-direction: row;
    /* max-height: 20px; */
    min-height: 100px;
    padding: 10px 10px;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;

const QuestionBody = styled.p`
  font-weight: 500;
  display: block;
  margin: 10px 0;
`;

const QuestionHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const QuestionUserInfoDiv = styled.div``;

const QuestionDate = styled.p`
  font-size: 1rem;
  direction: ltr;
  color: var(--color-grey-400);
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;
const AvatarDiv = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
`;

const Name = styled.h4`
  font-size: 1.4rem;
`;

const StudentLevel = styled.h4``;

const Span = styled.span`
  font-size: 1rem;
  color: var(--color-grey-500);
`;

function LoadedQuestionDetails({ allQuestions, loadedQuestionID }) {
  const filteredQuestion = allQuestions.questions
    .filter((question) => question._id == loadedQuestionID)
    .at(0);
  const { user, body, createdAt: date } = filteredQuestion;
  const { name, avatar, semester } = user;
  return (
    <QuestionContainer>
      <QuestionHead>
        <AvatarDiv>
          <Avatar src={"https://" + avatar} alt="user" />
          <QuestionUserInfoDiv>
            <Name>{name}</Name>
            <StudentLevel>
              <Span>{getStudentYear(semester)}</Span>
            </StudentLevel>
          </QuestionUserInfoDiv>
        </AvatarDiv>
        <QuestionDate>{getTimeFormatted(date)}</QuestionDate>
      </QuestionHead>
      <QuestionBody>{body}</QuestionBody>
    </QuestionContainer>
  );
}

export default LoadedQuestionDetails;
