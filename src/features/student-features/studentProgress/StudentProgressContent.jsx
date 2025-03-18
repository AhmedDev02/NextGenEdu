import styled from "styled-components";
import SemesterStats from "./SemesterStats";
import TableDetails from "./SemesterDetails";
import TableDegrees from "./TableDegrees";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-bottom: 1rem;
`;

const StyledStudentProgressContent = styled.div`
  max-width: 120rem;
  min-width: 900px; 
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.3rem;
  }
`;

function StudentProgressContent() {
  return (
    <ScrollWrapper>
      <StyledStudentProgressContent>
        <SemesterStats />
        <TableDetails />
        <TableDegrees />
      </StyledStudentProgressContent>
    </ScrollWrapper>
  );
}

export default StudentProgressContent;
