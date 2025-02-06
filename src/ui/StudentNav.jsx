import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MENU, STUDENTS_ITEMS } from "../utils/constants";
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineNewspaper,
} from "react-icons/hi2";
import { HiChatAlt2 } from "react-icons/hi";
import {
  FaRegCalendarAlt,
  FaRegChartBar,
  FaRegClipboard,
  FaTasks,
} from "react-icons/fa";
import { MdOutlineQuiz, MdTimeline } from "react-icons/md";

import Button from "./Button";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  /* overflow: hidden; */
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    /* overflow: hidden; */
    color: var(--color-primary-green);
    font-size: 1.4rem;
    font-weight: var(--font-weight-bold);
    padding: 1rem 2rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    border-radius: 10px !important;

    color: #34ad5d;
    background-color: var(--color-active);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-primary-green);
  }
`;
const Nav = styled.nav`
  padding: 5px 10px;
  background-color: #fff;
  /* height: auto; */
  box-shadow: var(--shadow-primary);
  z-index: 10;
  /* overflow: hidden; */
`;

function StudentNav() {
  return (
    <Nav>
      <h5>{MENU}</h5>
      <NavList>
        <li>
          <StyledNavLink to="/news">
            <HiOutlineNewspaper />
            <span>{STUDENTS_ITEMS.NEWS}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/enrolled-materials">
            <HiOutlineBookOpen />
            <span>{STUDENTS_ITEMS.ENROLLED_MATERIALS}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/chat">
            <HiChatAlt2 />
            <span>{STUDENTS_ITEMS.CHAT}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/discussion">
            <HiOutlineAcademicCap />
            <span>{STUDENTS_ITEMS.DISCUSSION}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/weekly-schedule">
            <FaRegCalendarAlt />
            <span>{STUDENTS_ITEMS.WEEKLY_SCHEDULE}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/projects-timeline">
            <MdTimeline />
            <span>{STUDENTS_ITEMS.TIMELINE}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/exams">
            <MdOutlineQuiz />
            <span>{STUDENTS_ITEMS.EXAMS}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/tasks">
            <FaTasks />
            <span>{STUDENTS_ITEMS.TASKS}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/student-progress">
            <FaRegChartBar />
            <span>{STUDENTS_ITEMS.STUDENT_PROGRESS}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/final-results">
            <FaRegClipboard />
            <span>{STUDENTS_ITEMS.FINAL_RESULTS}</span>
          </StyledNavLink>
        </li>
        <Button
          variation="secondary"
          size="custom"
          fontSize="1.2rem"
          paddingTopBottom="1rem"
          paddingLeftRight="4rem"
          margin="20px 0 20px 0 "
          navigateTo={"/student-profile"}
        >
          الملف الشخصي
        </Button>
      </NavList>
    </Nav>
  );
}

export default StudentNav;
