import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const FilterMenuContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
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

  &:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.3);
  }

  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
`;

function ListFilter({
  items,
  param,
  defaultItem,
  containerProps,
  itemProps,
  multipleChoose,
  containerStyles,
  itemStyles,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedItems = searchParams.get(param)?.split("-") || [defaultItem];

  const toggleItem = (day) => {
    const currentParams = new URLSearchParams(searchParams);
    let updatedItems;

    if (multipleChoose) {
      if (day === defaultItem) {
        updatedItems = [defaultItem];
      } else if (selectedItems.includes(day)) {
        updatedItems = selectedItems.filter((d) => d !== day);
        if (updatedItems.length === 0) updatedItems = [defaultItem];
      } else {
        updatedItems = selectedItems.filter((d) => d !== defaultItem);
        updatedItems.push(day);
      }
      currentParams.set(param, updatedItems.join("-"));
    } else {
      currentParams.set(param, day);
    }

    setSearchParams(currentParams, { replace: true });
  };

  return (
    <FilterMenuContainer {...containerProps} styles={containerStyles}>
      {items?.map(({ label, value }) => (
        <FilterItem
          key={value}
          active={selectedItems.includes(value)}
          onClick={() => toggleItem(value)}
          {...itemProps}
          styles={itemStyles}
        >
          {label}
        </FilterItem>
      ))}
    </FilterMenuContainer>
  );
}

export default ListFilter;
