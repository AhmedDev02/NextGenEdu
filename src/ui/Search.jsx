import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { setSearchQuery } from "../store/filterSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  height: 25px;
  width: 300px;
  position: relative;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 1.4rem;
  font-family: "Changa";
  font-weight: 500;
  padding-left: 30px;
  direction: rtl;
  &:focus {
    text-decoration: none;
    outline: none;
    border-radius: 8px 8px 0 0;
    border-bottom: 2px solid var(--color-secondary-darkblue);
  }
`;

const SearchIcon = styled(FiSearch)`
  margin-left: 10px;
  color: var(--color-grey-600);
  font-size: 2.5rem;
  cursor: pointer;
`;

function Search({ type, placeholder }) {
  const dispatch = useDispatch();
  const inputRef = useRef(null); // Reference to the input field

  // handling search
  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <SearchContainer>
      <SearchIcon onClick={handleIconClick} />
      <StyledInput
        ref={inputRef} // Attach ref to input
        type={type}
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </SearchContainer>
  );
}

export default Search;
