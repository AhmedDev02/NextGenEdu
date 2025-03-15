import styled from "styled-components";
import Search from "./Search";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/sideBarSlice";

import SignOutBar from "./SignOutBar";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  min-height: 70px;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-shadow: var(--shadow-primary);
  @media (max-width: 768px) {
    gap: 0;
    z-index: 100;
    min-height: 70px;
    justify-content: space-around;
    min-width: 100%;
  }

  /* 📟 Tablets (769px - 1024px) */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;

const Toggle = styled.button`
  margin-left: auto;
  margin-right: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  &:focus {
    border: none;
    outline: none;
    border: none;
    transition: 0.3s ease;
  }
  @media (max-width: 768px) {
    /* background-color: #fff; */

    font-size: 2.5rem;
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    margin-left: auto;
    font-size: 2.5rem;
  }
`;
const MenuIcon = styled(HiOutlineMenuAlt2)`
  display: block;
  font-size: 2.4rem;
  color: var(--color-grey-700);
  cursor: pointer;
  transform: rotate(180deg);
  transform: rotateY(180deg);
  border: none;
  @media (max-width: 768px) {
    font-size: 2rem;
    background: #fff;
    margin-left: auto;
    margin-right: 0;
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    height: 30px;
    font-size: 2rem;
    background: #fff;
    margin-right: 0;
  }
  &:hover {
    color: #4caf50;
    transition: 0.3s ease;
  }
`;

function Header({ profile = null }) {
  const dispatch = useDispatch();

  // handle toggle
  function handleToggle() {
    dispatch(toggleSidebar());
  }

  return (
    <StyledHeader>
      <Toggle onClick={handleToggle}>
        <MenuIcon />
      </Toggle>
      <Search />
      <SignOutBar profile={profile} />
    </StyledHeader>
  );
}

export default Header;
