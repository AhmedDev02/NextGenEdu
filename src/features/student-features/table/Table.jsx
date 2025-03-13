import styled from "styled-components";
import { schedules } from "./data";
import TableRow from "./TableRow";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";

const TableContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 3rem;
`;

const TableHeader = styled.div`
  border-radius: 2rem;
  width: 100%;
  height: auto;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    padding: 0.8rem;
  }
`;

const TableHeaderCell = styled.div`
  background-color: #eb3958;
  padding: 10px;
  border-radius: 2rem;
  box-shadow: var(--shadow-primary);
  min-width: 8rem;
  color: white;
  font-family: "Changa";
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-danger-red);
  text-align: center;
  height: 5rem;

  @media (max-width: 768px) {
    padding: 8px;
    min-width: 6rem;
    font-size: 1rem;
    height: auto;
  }
`;

const P = styled.p`
  font-size: clamp(1.4rem, 2vw, 2rem);
  font-weight: 500;
  text-align: center;
  margin: 0.5rem 0;
`;
const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

function Table() {
  const { selectedDays } = useStudentProgressContext();

  const filteredSchedules =
    selectedDays.length === 0 || selectedDays.includes("كل الأيام")
      ? schedules
      : schedules.filter((schedule) => selectedDays.includes(schedule.day));

  const groupedSchedules = filteredSchedules.reduce((acc, schedule) => {
    if (!acc[schedule.day]) {
      acc[schedule.day] = [];
    }
    acc[schedule.day].push(schedule);
    return acc;
  }, {});

  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderCell>
          <P>الأيام</P>
        </TableHeaderCell>
        <TableHeaderCell>
          <P>أسم المادة</P>
        </TableHeaderCell>
        <TableHeaderCell>
          <P>الوقت</P>
        </TableHeaderCell>
        <TableHeaderCell>
          <P>النوع</P>
        </TableHeaderCell>
        <TableHeaderCell>
          <P>المعلم</P>
        </TableHeaderCell>
        <TableHeaderCell>
          <P>المكان</P>
        </TableHeaderCell>
        <TableHeaderCell>
          <P>الحالة</P>
        </TableHeaderCell>
      </TableHeader>

      <TableBody>
        {Object.entries(groupedSchedules).map(([day, rows]) =>
          rows.map((row, index) => (
            <TableRow
              key={row.id}
              data={row}
              rowSpan={index === 0 ? rows.length : 0}
            />
          ))
        )}
      </TableBody>
    </TableContainer>
  );
}

export default Table;
