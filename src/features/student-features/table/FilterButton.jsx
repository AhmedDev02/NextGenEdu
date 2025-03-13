import styled from "styled-components";
import { days } from "./data";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  padding: 10px 0;
`;

const FilterButton = styled.button`
  font-size: 1.4rem;
  font-family: "Changa";
  min-width: clamp(6rem, 12vw, 14rem);
  max-width: 16rem;
  flex-grow: 1;
  border: 1px solid gray;
  outline: none;
  border-color: ${(props) => (props.active ? "#7cbd9c" : "#353434")};
  cursor: pointer;
  background: ${(props) => (props.active ? "#c9fad7" : "#eae8e8")};
  border-radius: 2rem;
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
    min-width: 8rem;
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
      {days.map((day) => (
        <FilterButton
          key={day}
          active={selectedDays.includes(day)}
          onClick={() => toggleDay(day)}
        >
          {day}
        </FilterButton>
      ))}
    </ButtonsContainer>
  );
}

export default FilterButtons;
