import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";

const AccordionItem = styled.div`
  border: 1px solid #f1f1f1;
  margin-bottom: 10px;
  border-radius: 4px;
  width: 100%;
`;

const AccordionHeader = styled.button`
  font-family: "Changa", sans-serif;
  border-radius: 2.5rem;
  width: 100%;
  padding: 0 6rem;
  border: none;
  text-align: right;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  outline: none;
  height: ${(props) => (props.type === "year" ? "8rem" : "6rem")};
  background: ${(props) =>
    props.type === "year" ? "var(--color-grey-900)" : "white"};
  color: ${(props) => (props.type === "year" ? "white" : "black")};

  &:active {
    background: ${(props) => (props.type === "year" ? "#1b243b" : "#d7d7d7")};
  }
  &:focus {
    outline: none;
  }
`;

const AccordionContent = styled.div`
  padding: ${(props) => (props.isOpen ? "15px" : "0")};
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: #f1f1f1;

  @media (max-width: 768px) {
    padding: ${(props) => (props.isOpen ? "12px" : "0")};
  }

  @media (max-width: 480px) {
    padding: ${(props) => (props.isOpen ? "10px" : "0")};
  }
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const P = styled.p`
  font-size: 3rem !important;
  font-size: ${(props) =>
    props.type === "year" ? "3rem" : "2.6rem"} !important;
  font-weight: bold;
`;
const Icon = styled(MdKeyboardArrowDown)`
  font-size: ${(props) =>
    props.type === "year" ? "3rem" : "2.6rem"} !important;
`;
function Accordion({ title, children, type }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionItem>
      <AccordionHeader
        type={type}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <HeaderContent>
          <P>{title}</P>
          <Icon />
        </HeaderContent>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionItem>
  );
}

export default Accordion;
