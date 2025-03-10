import styled from "styled-components";
import TableRow from "./TableRow";

const TableContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const TableHeaderContainer = styled.div`
  display: flex;
  gap: 6rem;
`;
const TableHeaderCell = styled.div`
  border-radius: 2rem;
  width: 25%;
  background-color: var(--color-grey-900);
  padding: 2rem;
  color: white;
  font-size: 2rem;
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
