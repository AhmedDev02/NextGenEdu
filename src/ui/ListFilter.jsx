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
    if (multipleChoose) {
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

      setSearchParams(
        { [param]: encodeURIComponent(updatedItems.join("-")) },
        { replace: true }
      );
    } else {
      setSearchParams({ [param]: encodeURIComponent(day) }, { replace: true });
    }
  };

  return (
    <FilterMenuContainer {...containerProps} styles={containerStyles}>
      {items.map(({ label, value }) => (
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
