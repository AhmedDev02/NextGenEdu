import styled from "styled-components";
import { days } from "./data";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const FilterButton = styled.button`
  font-size: 1.4rem;
  font-family: "Changa", sans-serif;
  text-align: center;
  user-select: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  flex-grow: 1;
  min-width: 110px;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  color: #374151;

  ${({ active }) =>
    active &&
    `
    border-color: #10b981;
    background-color: #d1fae5;
    color: #065f46;
    font-weight: 600;
  `}

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.3);
  }
`;

function FilterButtons() {
  const { selectedDays, setSelectedDays } = useStudentProgressContext();

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <ButtonsContainer>
      {days.map((day, index) => (
        <FilterButton
          key={index}
          active={selectedDays?.includes(day.value)}
          onClick={() => toggleDay(day.value)}
        >
          {day.value}
        </FilterButton>
      ))}
    </ButtonsContainer>
  );
}

export default FilterButtons;
