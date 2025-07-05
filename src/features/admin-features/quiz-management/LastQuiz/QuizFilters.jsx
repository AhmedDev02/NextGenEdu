import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";

const StyledTimeContainer = styled.div`
  box-shadow: var(--shadow-primary);
  margin: auto;
  width: 70%;
  height: 75px;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 760px) {
    width: 95%;
  }
`;
const StyledButton = styled.button`
  padding-inline: 16px;
  background: linear-gradient(to bottom, #30bd58, #399f63);
  border-radius: 12px;
  width: 30%;
  height: 46px;
  color: #ffffff;
  border: 0;
  @media (max-width: 760px) {
    width: 33%;
  }
`;
const StyledSearchButton = styled.input`
  padding-inline: 16px;
  background-color: #f1f1f1;
  border-radius: 12px;
  width: 65%;
  height: 46px;
  text-align: right;
  border: 0;
`;
const SearchIcon = styled.div`
  padding: 1rem;
  background: var(--color-grey-100);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function QuizFilters({ searchQuery, onSearchChange }) {
  return (
    <StyledTimeContainer>
      <SearchIcon for="search">
        <IoIosSearch size={25} />
      </SearchIcon>
      <StyledSearchButton
        type="text"
        placeholder=" ابحث عن كويز معين باستخدام العنوان..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </StyledTimeContainer>
  );
}

export default QuizFilters;
