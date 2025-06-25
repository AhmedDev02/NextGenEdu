import { useSearchParams } from "react-router-dom";
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
  @media (max-width: 768px) {
    min-width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
  /* this is for tablets */
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
    const currentParams = new URLSearchParams(searchParams); // Clone current search params
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

      currentParams.set(param, encodeURIComponent(updatedItems.join("-"))); // Update only the desired param
    } else {
      currentParams.set(param, encodeURIComponent(day)); // Update the selected item for non-multiple
    }

    setSearchParams(currentParams, { replace: true }); // Update search params with all existing params and the updated one
  };
  return (
    <FilterMenuContainer {...containerProps} styles={containerStyles}>
      {items?.map(({ label, value, id }) => (
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
