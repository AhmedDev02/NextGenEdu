import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

// Styled components can remain the same
const StyledTimeContainer = styled.div`
  box-shadow: var(--shadow-primary);
  margin: auto;
  width: 70%;
  height: 75px;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 760px) {
    width: 95%;
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

function ScheduledQuizFilters({ searchQuery, onSearchChange }) {
  return (
    <StyledTimeContainer>
      <SearchIcon for="search">
        <IoIosSearch size={25} />
      </SearchIcon>
      <StyledSearchButton
        id="search"
        type="text"
        placeholder=" ابحث عن كويز معين باستخدام الاسم..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </StyledTimeContainer>
  );
}

export default ScheduledQuizFilters;
