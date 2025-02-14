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

function ListFilter({ items, param, defaultItem }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedItems = searchParams.get(param)?.split("-") || [defaultItem];

  const toggleItem = (day) => {
    let updatedItems;

    if (day === defaultItem) {
      updatedItems = [defaultItem];
    } else if (selectedItems.includes(day)) {
      updatedItems = selectedItems.filter((d) => d !== day);
      if (updatedItems.length === 0) updatedItems = [defaultItem];
    } else {
      updatedItems = selectedItems.filter((d) => d !== defaultItem);
      updatedItems.push(day);
    }

    // Use replace instead of push to avoid adding repeatedly
    setSearchParams(
      { [param]: encodeURIComponent(updatedItems.join("-")) },
      { replace: true }
    );
  };

  return (
    <FilterMenuContainer>
      {items.map(({ label, value }) => (
        <FilterItem
          key={value}
          active={selectedItems.includes(value)}
          onClick={() => toggleItem(value)}
        >
          {label}
        </FilterItem>
      ))}
    </FilterMenuContainer>
  );
}

export default ListFilter;
