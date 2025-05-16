import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

// Styled DatePicker component
const StyledDatePicker = styled(DatePicker)`
  &:focus {
    outline: none;
    border-color: var(--green-primary);
  }
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: var(--shadow-primary);
  cursor: pointer;
`;

function DateSelector({ onDate }) {
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    // This will run whenever `startDate` changes
    onDate(startDate);
  }, [startDate, onDate]); // Dependency array ensures the effect runs when `startDate` changes

  return (
    <StyledDatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        // onDate(startDate);
      }}
      withPortal
      portalId="root-portal"
      placeholderText="اختر التاريخ"
      minDate={new Date()} // Disable past dates
    />
  );
}

export default DateSelector;
