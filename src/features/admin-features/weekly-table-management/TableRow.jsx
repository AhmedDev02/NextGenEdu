import { GoDotFill } from "react-icons/go";
import styled from "styled-components";

const TableRowContainer = styled.div`
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  overflow-x: auto;
`;

const TableSmallRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    font-size: 1rem;
  }
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
  const { course, status, from, to, hall, type } = data;
  const updatedStatus = status;

  return (
    <TableRowContainer>
      <TableSmallRow>
        <TableSmallRowCell>
          <P>{course}</P>
        </TableSmallRowCell>
        <TableSmallRowCell>
          <P>{from} صباحا</P>
        </TableSmallRowCell>
        <TableSmallRowCell>
          <P>{to} صباحا</P>
        </TableSmallRowCell>
        <TableSmallRowCell>
          <P>{type}</P>
        </TableSmallRowCell>
        <TableSmallRowCell>
          <P>{hall.hall_code}</P>
        </TableSmallRowCell>
        <TableSmallRowCell>
          {updatedStatus === "in time" ? (
            <>
              <Icon type="inTime" />
              <P>في موعدها</P>
            </>
          ) : updatedStatus === "تم التأجيل" ? (
            <>
              <Icon type="postpone" />
              <P>تم التأجيل</P>
            </>
          ) : (
            <>
              <Icon type="cancel" />
              <P>تم الالغاء</P>
            </>
          )}
        </TableSmallRowCell>
      </TableSmallRow>
    </TableRowContainer>
  );
}
export default TableRow;
