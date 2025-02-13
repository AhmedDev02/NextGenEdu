import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const FilterMenuContainer = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FilterItem = styled.li`
  padding: 8px 16px;
  border: 2px solid var(--color-grey-500);

  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;

  &:hover {
    background-color: #e0f7e9;
  }

  ${({ active }) =>
    active &&
    `
  border: 2px solid #34ad5d;

    background-color: var(--color-active);
    color: #34ad5d;
  `}
`;

function ListFilter({ items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedDays = decodeURIComponent(
    searchParams.get("days") || "all"
  ).split("-");

  const toggleDay = (day) => {
    let updatedDays;
    if (
      day === "all" ||
      (selectedDays.includes(day) && selectedDays.length === 1)
    ) {
      updatedDays = ["all"];
    } else if (selectedDays.includes(day)) {
      updatedDays = selectedDays.filter((d) => d !== day);
      if (updatedDays.length === 0) updatedDays = ["all"];
    } else {
      updatedDays = [...selectedDays.filter((d) => d !== "all"), day];
    }
    setSearchParams({ days: encodeURIComponent(updatedDays.join("-")) });
  };

  return (
    <FilterMenuContainer>
      {items.map(({ label, value }) => (
        <FilterItem
          key={value}
          active={selectedDays.includes(value)}
          onClick={() => toggleDay(value)}
        >
          {label}
        </FilterItem>
      ))}
    </FilterMenuContainer>
  );
}

export default ListFilter;
