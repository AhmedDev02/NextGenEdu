import { GoDotFill } from "react-icons/go";
import styled from "styled-components";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";
import { useEffect } from "react";

const TableRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  overflow-x: auto; /* Enables horizontal scrolling */
  overflow-y: hidden;
`;

const TableSmallRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7 equal columns */
  /* width: 1024px; Fixed width to prevent responsiveness */
  align-items: center;
  text-align: center;
`;

const TableSmallRowCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  height: 100%;
  color: black;
  border: 1px solid #e0e0e0;

  &:last-child {
    border-right: none;
  }

  ${({ type }) =>
    type === "day" &&
    `
    background-color: #30BD58;
    color: white;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  `}
`;

const P = styled.p`
  font-size: clamp(1.2rem, 1.4rem, 1.6rem);
  font-weight: 500;
  text-align: center;
  margin: 0.5rem 0;
`;

const Icon = styled(GoDotFill)`
  color: ${({ type }) =>
    type === "inTime"
      ? "green"
      : type === "postpone"
      ? "yellow"
      : type === "cancel"
      ? "red"
      : "black"};
  font-size: 1.8rem;
`;
function TableRow({ data }) {
  const { day, place, teacher, type, course, time, id,status } = data;
  const { lectureStatuses } = useStudentProgressContext();

  const updatedStatus = lectureStatuses[id] ||status; // Ensure state update is detected


  return (
    <TableRowContainer>
      <TableSmallRow>
        <TableSmallRowCell type="day">
          <P>{day}</P>
        </TableSmallRowCell>
        <TableSmallRowCell>
          <P>{course}</P>
        </TableSmallRowCell>
        <TableSmallRowCell>
          <P>{time}</P>
        </TableSmallRowCell>
        <TableSmallRowCell>
          <P>{type}</P>
        </TableSmallRowCell>
        <TableSmallRowCell>
          <P>{teacher}</P>
        </TableSmallRowCell>
        <TableSmallRowCell>
          <P>{place}</P>
        </TableSmallRowCell>
        <TableSmallRowCell>
          {updatedStatus === "في موعدها" ? (
            <Icon type="inTime" />
          ) : updatedStatus === "تم التأجيل" ? (
            <Icon type="postpone" />
          ) : (
            <Icon type="cancel" />
          )}
          <P>{updatedStatus}</P>
        </TableSmallRowCell>
      </TableSmallRow>
    </TableRowContainer>
  );
}

export default TableRow;
