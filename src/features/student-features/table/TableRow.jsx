import styled from "styled-components";
import { GoDotFill } from "react-icons/go";

const TableRowContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
  overflow: hidden;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    text-align: center;
  }
`;

const Cell = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: #374151;

  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    min-height: 60px;
    border-left: 1px solid #f3f4f6;
    &:first-child {
      border-left: none;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    &:last-child {
      border-bottom: none;
    }
  }
`;

const CellLabel = styled.span`
  font-weight: 600;
  color: #6b7280;

  @media (min-width: 769px) {
    display: none;
  }
`;

const CellContent = styled.div`
  font-family: "Changa", sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #374151;
`;

const Icon = styled(GoDotFill)`
  font-size: 2rem;
  color: ${({ type }) =>
    type === "inTime"
      ? "#22c55e"
      : type === "postpone"
      ? "#f59e0b"
      : type === "cancel"
      ? "#ef4444"
      : "#6b7280"};
`;

function TableRow({ data }) {
  const { course, status, from, to, hall, type } = data;
  const formatTime = (timeStr) => timeStr.split(":").slice(0, 2).join(":");

  const statusMap = {
    "in time": { text: "في موعدها", type: "inTime" },
    "تم التأجيل": { text: "تم التأجيل", type: "postpone" },
    "تم الالغاء": { text: "تم الالغاء", type: "cancel" },
  };

  const currentStatus = statusMap[status] || statusMap["تم الالغاء"];

  return (
    <TableRowContainer>
      <Cell>
        <CellLabel>أسم المادة</CellLabel>
        <CellContent>{course}</CellContent>
      </Cell>
      <Cell>
        <CellLabel>من الساعة</CellLabel>
        <CellContent>{formatTime(from)} صباحا</CellContent>
      </Cell>
      <Cell>
        <CellLabel>حتي الساعة</CellLabel>
        <CellContent>{formatTime(to)} صباحا</CellContent>
      </Cell>
      <Cell>
        <CellLabel>النوع</CellLabel>
        <CellContent>{type}</CellContent>
      </Cell>
      <Cell>
        <CellLabel>المكان</CellLabel>
        <CellContent>{hall.hall_code}</CellContent>
      </Cell>
      <Cell>
        <CellLabel>الحالة</CellLabel>
        <CellContent>
          <Icon type={currentStatus.type} />
          {currentStatus.text}
        </CellContent>
      </Cell>
    </TableRowContainer>
  );
}

export default TableRow;
