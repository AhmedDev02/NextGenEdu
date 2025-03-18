import styled from "styled-components";
import TableRow from "./TableRow";

const TableContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  overflow-x: auto; /* Enables horizontal scrolling on small screens */
  padding-bottom: 1rem;

  @media (max-width: 1024px) {
    width: 100%; /* Ensures it does not shrink */
    padding: 0 1rem;
  }
`;

const TableHeaderContainer = styled.div`
  display: flex;
  gap: 6rem;
  min-width: 700px; /* Prevents shrinking and ensures visibility */

  @media (max-width: 768px) {
    gap: 2rem; /* Reduce spacing on small screens */
  }
`;
const TableHeaderCell = styled.div`
  border-radius: 2rem;
  width: 25%;
  background-color: var(--color-grey-900);
  padding: 2rem;
  color: white;
  font-size: 2rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

function Table({ data }) {
  const { name, courses } = data;
  return (
    <TableContainer>
      <TableHeaderContainer>
        <TableHeaderCell>
          <p>اسم الماده </p>
        </TableHeaderCell>
        <TableHeaderCell>
          <p>كود المقرر</p>
        </TableHeaderCell>
        <TableHeaderCell>
          <p>التقدير</p>
        </TableHeaderCell>
        <TableHeaderCell>
          <p>موقف المادة</p>
        </TableHeaderCell>
      </TableHeaderContainer>
      {courses.map((course, index) => (
        <TableRow key={index} data={course} />
      ))}
    </TableContainer>
  );
}

export default Table;
