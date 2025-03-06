import styled from "styled-components";

const QuestionContainer = styled.div`
  background: #fff;
  flex-grow: 1;
  padding: 20px;
  border-radius: 20px;
  min-height: 160px;
  border: 2px solid var(--color-secondary-darkblue);
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
  color: var(--color-grey-400);
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
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

function QuestionDetails({ name, level, avatar, question, date }) {
  return (
    <QuestionContainer>
      <QuestionHead>
        <AvatarDiv>
          <Avatar src="https://picsum.photos/200/300" alt="user" />
          <QuestionUserInfoDiv>
            <Name>{name}</Name>
            <StudentLevel>
              <Span> طالب فرقة {level}</Span>
            </StudentLevel>
          </QuestionUserInfoDiv>
        </AvatarDiv>
        <QuestionDate>{date}</QuestionDate>
      </QuestionHead>
      <QuestionBody>{question}</QuestionBody>
    </QuestionContainer>
  );
}

export default QuestionDetails;
