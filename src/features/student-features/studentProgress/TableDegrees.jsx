import styled from "styled-components";
import TableDegreesRow from "./TableDegreesRow";
import { useStudentProgress } from "./useStudentProgress";
import toast from "react-hot-toast";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";
import { useEffect, useMemo } from "react";
import Spinner from "../../../ui/amr/Spinner";

const StyledTableDegrees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function TableDegrees() {
  const { term } = useStudentProgressContext();
  const { data, isPending, error } = useStudentProgress();
  const { semesters } = data || {};

  const termData = useMemo(() => {
    if (!semesters) return null;
    return term === "Term1" ? semesters.Term1 : semesters.Term2;
  }, [term, semesters]);

  useEffect(() => {
    if (error) {
      toast.error("Error loading data. Please try again.");
    }
  }, [error]);

  if (isPending) return <Spinner />;
  if (!termData?.courses) return <p>No courses available for this term.</p>;

  return (
    <StyledTableDegrees>
      {termData.courses.map((course) => (
        <TableDegreesRow key={course.courseId} course={course} />
      ))}
    </StyledTableDegrees>
  );
}

export default TableDegrees;
