import styled from "styled-components";
import DiscussionHeader from "./DiscussionHeader";
import Question from "./Question";
import { useReadQuestions } from "./useReadQuestions";
import { useUser } from "../../../hooks/useUser";
import Spinner from "../../../ui/amr/Spinner";

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
  const { questions, isLoading, error, id } = useReadQuestions();
  const data = questions?.questions ? questions?.questions : [];

  if (isLoading) return <Spinner />;
  return (
    <Div>
      <DiscussionHeader questionsNum={data.length} />
      {data.map((item, index) => {
        return (
          <Question
            key={index}
            isUser={item.user.id == id}
            interested={item.user.liked}
            body={item.body}
            questionDetails={item}
          />
        );
      })}
    </Div>
  );
}

export default DiscussionContent;
