import React from "react";
import styled, { css } from "styled-components";

const FilterMenuContainer = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: ${({ direction }) => direction || "row"};
  padding: ${({ padding }) => padding || ""};
  list-style: none;
  padding: 0;
  margin: 0;
  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
`;

const FilterItem = styled.li`
  padding: ${({ padding }) => padding || "8px 16px"};
  border: ${({ border }) => border || "2px solid var(--color-grey-500)"};
  border-radius: ${({ borderRadius }) => borderRadius || "20px"};
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;

  &:hover {
    background-color: #e0f7e9;
  }

  ${({ active }) =>
    active &&
    `border: 2px solid #34ad5d;
    background-color: var(--color-active);
    color: #34ad5d;
  `}
`;

function ListFilterLocally({
  items,
  containerProps,
  containerStyles,
  onClickItem,
  clickedValue, // The value of the currently clicked item
}) {
  const uniqueItems = items.filter((value, index, self) => {
    // Check if the value is the first occurrence of the semester.id (value)
    return index === self.findIndex((t) => t.value === value.value);
  });

  return (
    <FilterMenuContainer {...containerProps} styles={containerStyles}>
      {uniqueItems?.map(({ label, value }) => (
        <FilterItem
          key={value}
          active={clickedValue === value} // Highlight selected item
          onClick={() => onClickItem(value)} // Trigger filter logic on click
        >
          {label}
        </FilterItem>
      ))}
    </FilterMenuContainer>
  );
}

export default ListFilterLocally;
