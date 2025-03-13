import styled from "styled-components";
import DiscussionHeader from "./DiscussionHeader";
import Question from "./Question";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  gap: 20px;
`;

function DiscussionContent() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Div>
      <DiscussionHeader questionsNum={20} />
      {data.map((item, index) => (
        <Question
          key={index}
          liked={index === 1 || index === 3 || index === 7 ? false : true}
        />
      ))}
    </Div>
  );
}

export default DiscussionContent;
