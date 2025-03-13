import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MENU, ADMIN_ITEMS } from "../utils/constants";
import {
  HiOutlineClipboardList, // Dashboard (لوحة التحكم)
  HiOutlineArchive, // News Management (إدارة الأخبار)
  HiOutlineChatAlt2, // Materials Management (إدارة المواد)
  HiOutlineQuestionMarkCircle, // Quizzes Management (إدارة الكويزات)
  HiOutlineCalendar, // Tasks Management (إدارة التكاليف)
  HiOutlineUserGroup, // Students Management (إدارة الطلاب)
  HiOutlineLockClosed, // Forum Management (إدارة المنتدى)
  HiOutlineClock, // Weekly Schedule (الجدول الأسبوعي)
  HiOutlineCheckCircle, // Final Grades (الدرجات النهائية)
} from "react-icons/hi";

import Button from "./Button";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  /* position: fixed; */
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for IE, Edge */
  -ms-overflow-style: none;
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

  box-shadow: var(--shadow-primary);
  z-index: 10;
`;

function StudentNav() {
  return (
    <Nav>
      <h5>{MENU}</h5>
      <NavList>
        <li>
          <StyledNavLink to="dashboard">
            <HiOutlineClipboardList />
            <span>{ADMIN_ITEMS.DASHBOARD}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="news">
            <HiOutlineArchive />
            <span>{ADMIN_ITEMS.NEWS_MANAGEMENT}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="materials">
            <HiOutlineChatAlt2 />
            <span>{ADMIN_ITEMS.MATERIALS_MANAGEMENT}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="quizzes">
            <HiOutlineQuestionMarkCircle />
            <span>{ADMIN_ITEMS.QUIZZES_MANAGEMENT}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="tasks">
            <HiOutlineCalendar />
            <span>{ADMIN_ITEMS.TASKS_MANAGEMENT}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="students">
            <HiOutlineUserGroup />
            <span>{ADMIN_ITEMS.STUDENTS_MANAGEMENT}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="discussion">
            <HiOutlineLockClosed />
            <span>{ADMIN_ITEMS.DISCUSSION_MANAGEMENT}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="weekly-schedule">
            <HiOutlineClock />
            <span>{ADMIN_ITEMS.WEEKLY_SCHEDULE}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="final-result">
            <HiOutlineCheckCircle />
            <span>{ADMIN_ITEMS.FINAL_GRADES}</span>
          </StyledNavLink>
        </li>
        <Button
          variation="secondary"
          size="custom"
          fontSize="1.2rem"
          paddingTopBottom="1rem"
          paddingLeftRight="4rem"
          margin="20px 0 100px 0 "
          navigateTo={"profile"}
        >
          الملف الشخصي
        </Button>
      </NavList>
    </Nav>
  );
}

export default StudentNav;
