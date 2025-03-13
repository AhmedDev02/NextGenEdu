import styled from "styled-components";
import Accordion from "../../../ui/amr/Accordion";
import SemesterAccordion from "./SemesterAccordion";

const AccordionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

function YearAccordion({ data }) {
  const { year, semesters, title } = data;
  return (
    <AccordionContainer>
      <Accordion type="year" title={title}>
        {semesters.map((semester, index) => (
          <SemesterAccordion
            data={semester}
            key={index}
            title={semester.name}
          />
        ))}
      </Accordion>
    </AccordionContainer>
  );
}

export default YearAccordion;
