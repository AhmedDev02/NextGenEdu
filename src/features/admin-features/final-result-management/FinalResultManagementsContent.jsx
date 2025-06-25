import styled from "styled-components";
import ExportButton from "./ExportButton";
import StudentsResult from "./StudentsResult";

export const Container = styled.div`
  width: 100%;
  max-width: 90rem; 
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: stretch; 
  gap: 4rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 1.5rem;
  }
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
