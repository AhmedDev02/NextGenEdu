import styled from "styled-components";
import Search from "./Search";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import SignOutBar from "./SignOutBar";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: 70px;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-shadow: var(--shadow-primary);
`;

const Toggle = styled.button`
  margin-left: auto;
  margin-right: 10px;
  border: none;
  outline: none;
  &:focus {
    border: none;
    outline: none;
    border: none;
    transition: 0.3s ease;
  }
`;
const MenuIcon = styled(HiOutlineMenuAlt2)`
  display: block;
  font-size: 2.4rem;
  color: var(--color-grey-700);
  cursor: pointer;
  transform: rotate(180deg);
  transform: rotateY(180deg);
  background: #fff;
  border: none;

  &:hover {
    color: #4caf50;
    transition: 0.3s ease;
  }
`;

function Header({ profile = null, toggle }) {
  return (
    <StyledHeader>
      <Toggle onClick={toggle}>
        <MenuIcon />
      </Toggle>
      <Search />
      <SignOutBar profile={profile} />
    </StyledHeader>
  );
}

export default Header;
