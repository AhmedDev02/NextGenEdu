import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  width: 22rem;
`;

const DropdownButton = styled.button`
  font-family: "Changa";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7rem;
  border: 1px solid #30bd58;
  border-radius: 1.5rem;
  padding: 0.5rem;
  color: white;
  font-size: 2rem!important;;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(to bottom, #39b85f, #23ad4a);

  &:hover {
    background-color: #37a661;
    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(48, 189, 88, 0.5);
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    `
    max-height: 200px;
    opacity: 1;
  `}
`;

const DropdownItem = styled.li`
padding: 1rem;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
    color: #000;
  }
`;

const ArrowIcon = styled(MdOutlineKeyboardArrowDown)`
  margin-left: 1rem;
`;

function SemesterPicker() {
  const { selectedOption, handleTerm } = useStudentProgressContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={() => setIsOpen((prev) => !prev)}>
        {selectedOption}
        <ArrowIcon />
      </DropdownButton>
      <DropdownList isOpen={isOpen}>
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
