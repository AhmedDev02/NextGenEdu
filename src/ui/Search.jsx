import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1; /* Light grey background */
  padding: 8px 12px;
  border-radius: 8px;
  width: 300px; /* Adjust width as needed */
  position: relative;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 1.4rem;
  padding-left: 30px;
  direction: rtl;
  font-family: "Changa", sans-serif;

  &:focus {
    text-decoration: none;
    outline: none;
  }
`;

const SearchIcon = styled(FiSearch)`
  margin-left: 10px;
  color: var(--color-grey-600);
  font-size: 1.8rem;
`;

function Search() {
  return (
    <SearchContainer>
      <SearchIcon />
      <StyledInput placeholder="بحث..." />
    </SearchContainer>
  );
}

export default Search;
