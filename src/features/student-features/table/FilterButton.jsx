import styled from "styled-components";
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
  width: 12rem;
  flex-grow: 1;
  border: 1px solid gray;
  outline: none;
  border-color: ${(props) => (props.active ? "#7cbd9c" : "#353434")};
  cursor: pointer;
  background: ${(props) => (props.active ? "#c9fad7" : "#eae8e8")};
  border-radius: 1.5rem;
  color: ${(props) => (props.active ? "#06722c" : "#353434")};
  font-weight: bold;
  padding: 10px 12px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 6px 10px;
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
