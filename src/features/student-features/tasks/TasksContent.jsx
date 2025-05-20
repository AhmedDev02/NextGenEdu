import styled from "styled-components";
import TasksCards from "./TasksCards";

const Container = styled.div`
  width: 100%;
`;
function TasksContent() {
  return (
    <Container>
      <TasksCards />
    </Container>
  );
}

export default TasksContent;
