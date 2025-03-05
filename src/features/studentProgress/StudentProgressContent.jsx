import styled from "styled-components";
import SemesterStats from "./SemesterStats";
import TableDetails from "./SemesterDetails";
import TableDegrees from "./TableDegrees";

// Define breakpoints
const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

const StyledStudentProgressContent = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.3rem;
  }
`;

function StudentProgressContent() {
  return (
    <StyledStudentProgressContent>
      <SemesterStats />
      <TableDetails />
      <TableDegrees />
    </StyledStudentProgressContent>
  );
}

export default StudentProgressContent;
