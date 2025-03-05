import styled from "styled-components";
import {  useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useStudentProgressContext } from "../../context/StudentProgressProvider";

// Define breakpoints
const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

const DropdownContainer = styled.div`
  position: relative;
  width: 100%; /* Full width on mobile, scales up */
  max-width: 22rem; /* Limit width on desktop */

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 18rem; /* Slightly smaller on tablets */
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 16rem; /* Even smaller on mobile */
  }
`;

const DropdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: clamp(5rem, 7vw, 7rem); /* Responsive height: min 5rem, max 7rem */
  outline: none;
  border: 1px solid #30bd58;
  border-radius: 1.5rem;
  padding: 0.5rem; /* Use relative units */
  color: white;
  font-size: clamp(
    1.5rem,
    2vw,
    2rem
  ); /* Responsive font size: min 1.5rem, max 2rem */
  box-shadow: 0 clamp(1rem, 2vw, 2rem) clamp(1rem, 2vw, 2rem) rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(to bottom, #39b85f, #23ad4a);

  &:hover {
    background-color: #37a661;
    box-shadow: 0 clamp(1.5rem, 2.5vw, 2.5rem) clamp(1.5rem, 2.5vw, 2.5rem)
      rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: none;
    box-shadow: 0 clamp(1rem, 2vw, 2rem) clamp(1rem, 2vw, 2rem)
        rgba(0, 0, 0, 0.3),
      0 0 0 3px rgba(48, 189, 88, 0.5);
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 5rem; /* Fixed smaller height on mobile */
    font-size: 1.5rem; /* Smaller font on mobile */
    padding: 0.3rem; /* Reduce padding on mobile */
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 clamp(0.5rem, 1vw, 1rem) clamp(1rem, 2vw, 2rem)
    rgba(0, 0, 0, 0.2);
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &.open {
    max-height: 200px;
    opacity: 1;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 18rem; /* Match container width on tablets */
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 16rem; /* Match container width on mobile */
  }
`;

const DropdownItem = styled.li`
  padding: clamp(0.5rem, 1vw, 1rem); /* Responsive padding */
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
    color: #000;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.5rem; /* Fixed smaller padding on mobile */
    font-size: 1.2rem; /* Smaller text on mobile */
  }
`;

const ArrowIcon = styled(MdOutlineKeyboardArrowDown)`
  margin-right: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-right: 1rem; /* Reduce margin on mobile */
    font-size: 1.5rem; /* Smaller icon on mobile */
  }
`;

function SemesterPicker() {
  const { isOpen, setIsOpen, selectedOption, dropdownRef, handleTerm } =
    useStudentProgressContext();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <ArrowIcon />
      </DropdownButton>
      <DropdownList className={isOpen ? "open" : ""}>
        <DropdownItem onClick={() => handleTerm("الفصل الدراسي الأول")}>
          الفصل الدراسي الأول
        </DropdownItem>
        <DropdownItem onClick={() => handleTerm("الفصل الدراسي الثاني")}>
          الفصل الدراسي الثاني
        </DropdownItem>
      </DropdownList>
    </DropdownContainer>
  );
}

export default SemesterPicker;
