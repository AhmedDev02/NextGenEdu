import styled from "styled-components";
import Accordion from "../../../ui/amr/Accordion";
import SemesterAccordion from "./SemesterAccordion";

const AccordionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

function YearAccordion({ data }) {
  const { semesters, title } = data;

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
