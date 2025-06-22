import styled from "styled-components";
import DiscussionHeader from "./DiscussionHeader";
import Question from "./Question";
import { useReadQuestions } from "./useReadQuestions";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;

function DiscussionContent() {
  const { questions } = useReadQuestions();
  const data = questions.questions;
  console.log(data);
  return (
    <Div>
      <DiscussionHeader questionsNum={data.length} />
      {data.map((item, index) => (
        <Question
          key={index}
          isUser={true}
          interested={index === 1 || index === 3 || index === 7 ? false : true}
        />
      ))}
    </Div>
  );
}

export default DiscussionContent;
