import styled from "styled-components";
import ExportButton from "./ExportButton";
import StudentsResult from "./StudentsResult";

const Container = styled.div`
  width: 100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem;
`;

const FinalResultManagementsContent = () => {
  return (
    <Container>
      <ExportButton />
      <StudentsResult />
    </Container>
  );
};

export default FinalResultManagementsContent;
