import styled from "styled-components";
import AnswerStatus from "./AnswerStatus";
import AnswerForm from "./AnswerForm";
import QuestionModal from "./QuestionModal";
import AnswerModal from "./AnswerModal";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid var(--color-secondary-darkblue);
  overflow-y: auto;
  max-height: 700px;
  &::-webkit-scrollbar {
    width: 10px; /* Scrollbar width */
  }
  &::-webkit-scrollbar-track {
    display: block;
    background: transparent; /* Track color */
    border-radius: 10px;
    z-index: 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary-darkblue); /* Scroll thumb color */
    border-radius: 10px;
    display: block;
    border: 2px solid #e0e0e0;
  }
  padding-bottom: 25px;
  z-index: 1;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;
const H3 = styled.h3`
  font-size: 1.5rem;
  align-self: end;
  margin-left: auto;
  margin-bottom: 20px;
`;
const AnswerRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const AnswerTextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
  padding: 5px 15px;
  border-radius: 15px;
  border: 1px solid var(--color-secondary-darkblue);
  margin: 10px 0;
`;
const AnswerHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const AvatarDiv = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
`;
const Name = styled.h4`
  font-size: 1.4rem;
  ${({ first }) =>
    first &&
    `&::before {
    content: "👑";
    position: absolute;
    font-size: 5.7rem;
    top: 23px;
    transform: rotate(25deg);
    right: 3px;
  }
    `}
`;

const StudentLevel = styled.h4``;
const AnswerUserInfoDiv = styled.div``;
const Span = styled.span`
  font-size: 1rem;
  color: var(--color-grey-500);
`;

const AnswerDate = styled.p`
  font-size: 1rem;
  color: var(--color-grey-400);
`;
const AnswerBody = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  display: block;
  margin: 10px 0;
  align-self: start;
`;
const AnswerStatusContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  height: 90%;
`;

function AnswersContainer({ name, level, date, answer, isUser }) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Container>
      <H3>أحدث الإجابات</H3>
      {data.map((item, index) => (
        <AnswerRow key={index}>
          <AnswerTextDiv>
            <AnswerHead>
              <AvatarDiv>
                <Avatar src="https://picsum.photos/200/300" alt="user" />
                <AnswerUserInfoDiv>
                  <Name first={index === 0}>{name}</Name>
                  <StudentLevel>
                    <Span> طالب فرقة {level}</Span>
                  </StudentLevel>
                </AnswerUserInfoDiv>
              </AvatarDiv>
              <AnswerDate>{date}</AnswerDate>
            </AnswerHead>
            <AnswerBody>{answer}</AnswerBody>
          </AnswerTextDiv>
          {!isUser && <AnswerStatus first={+index === 0} likes={19} />}
          {isUser && (
            <AnswerStatusContainer>
              <AnswerStatus first={+index === 0} likes={19} />
              <AnswerModal />
            </AnswerStatusContainer>
          )}
        </AnswerRow>
      ))}
      <AnswerForm />
    </Container>
  );
}

export default AnswersContainer;
