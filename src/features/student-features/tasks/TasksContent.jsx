import styled from "styled-components";
import TasksCards from "./TasksCards";

const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;
`;

function TasksContent() {
  return (
    <Container>
      <TasksCards />
    </Container>
  );
}

export default TasksContent;
