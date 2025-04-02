import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  /* border: 1px solid gray; */
  /* background-color: transparent;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 0.4rem;*/
  display: flex;
  gap: 2rem;
`;

const FilterButton = styled.button`
  background-color: transparent;
  border: 1.5px solid #a4a4a4;

  ${(props) =>
    props.$active &&
    css`
      background-color: #8afcaa;
      color: #159c15;
    `}

  border-radius: 2rem;
  font-weight: bold;
  font-size: 1.4rem;
  transition: all 0.3s;
  padding: 2rem 4rem;

  &:hover:not(:disabled) {
    background-color: var(--color-grey-200);
    color: black;
  }
  &:focus {
    outline: none;
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          key={option.value}
          $active={currentFilter === option.value}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
