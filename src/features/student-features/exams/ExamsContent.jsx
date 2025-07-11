import styled from "styled-components";
import ExamCards from "./ExamCards";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
function ExamsContent() {
  return (
    <Div>
      <ExamCards />;
    </Div>
  );
}

export default ExamsContent;
