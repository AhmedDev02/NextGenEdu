import styled, { css } from "styled-components";
import { days } from "./data";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 1000px;
  gap: 20px;
  padding: 10px 0;
`;

const FilterButton = styled.button`
  font-size: 1.4rem;
  font-family: "Changa";
  text-align: center;
  user-select: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  width: 12rem;
  flex-grow: 1;
  padding: 5px 12px;
  border-radius: 3rem;

  border: 2px solid var(--color-grey-500);
  background-color: #eae8e8;
  color: #353434;

  ${({ active }) =>
    active &&
    `
    border: 2px solid #34ad5d;
    background-color: var(--color-active, #c9fad7);
    color: #06722c;
  `}

  &:hover {
    background-color: #e0f7e9;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 6px 10px;
  }

  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
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
