import styled from "styled-components";
import TableDegreesRow from "./TableDegreesRow";
import { useStudentProgress } from "./useStudentProgress";
import toast from "react-hot-toast";
import { useStudentProgressContext } from "../../context/StudentProgressProvider";
import { useEffect, useState } from "react";
import Spinner from "../../ui/amr/Spinner";

// Define breakpoints
const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

const StyledTableDegrees = styled.div`
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0.5rem; /* Reduce padding on mobile/tablet */
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.3rem; /* Minimal padding on very small screens */
  }
`;

function TableDegrees() {
  const [termData, setTermData] = useState([]);
  const { term } = useStudentProgressContext();
  const { data, isPending, error } = useStudentProgress();
  const { semesters } = data || {};
  const { Term1, Term2 } = semesters || {};

  useEffect(() => {
    if (!semesters) return;

    if (term === "Term1") {
      setTermData(Term1);
    } else if (term === "Term2") {
      setTermData(Term2);
    }
  }, [term, Term1, Term2, semesters]);

  if (isPending) return <Spinner />;
  if (error) {
    toast.error("error loading data");
    return null;
  }
  if (!termData?.courses) return null;

  return (
    <StyledTableDegrees>
      {termData.courses.map((course) => (
        <TableDegreesRow key={course.courseId} course={course} />
      ))}
    </StyledTableDegrees>
  );
}
export default TableDegrees;
