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
  @media (max-width: 768px) {
    padding: 0;
    height: 25px;
    justify-content: space-around;
    max-width: 40%;
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    padding: 0;
    height: 25px;
    justify-content: space-around;
    max-width: 40%;
  }
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
  @media (max-width: 768px) {
    padding: 0;
    font-size: 1.4rem;
    padding-left: 10px;
    height: 25px;
    margin-left: auto;
    max-width: 70%;
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    padding: 0;
    font-size: 1.4rem;
    padding-left: 10px;
    height: 25px;
    margin-left: auto;
    max-width: 70%;
  }
`;

const SearchIcon = styled(FiSearch)`
  margin-left: 10px;
  color: var(--color-grey-600);
  font-size: 2.5rem;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0;
    margin-right: 20px;

    font-size: 2rem;
  }
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
