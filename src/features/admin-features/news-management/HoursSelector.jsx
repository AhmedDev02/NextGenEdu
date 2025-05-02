import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

// Styled DatePicker component
const StyledHoursPicker = styled(DatePicker)`
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: var(--shadow-primary);
  cursor: pointer;
`;
function HoursSelector({ onHours }) {
  const [startDate, setStartDate] = useState(null);
  return (
    <StyledHoursPicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        onHours(startDate);
      }}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      dateFormat="h:mm aa"
      placeholderText="اختر الساعة"
      showTimeCaption={false}
      minDate={new Date()} // Disable past dates
    />
  );
}

export default HoursSelector;
