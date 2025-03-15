import { HiOutlineChevronDown } from "react-icons/hi";
import styled from "styled-components";

const Toggle = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  &:focus {
    border: none;
    outline: none;
    border: none;
    transition: 0.3s ease;
  }
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  /* 📟 Tablets (769px - 1024px) */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;

const DropIcon = styled(HiOutlineChevronDown)`
  display: block;
  font-size: 2.4rem;
  color: var(--color-grey-700);
  cursor: pointer;
  transform: rotate(180deg);
  transform: rotateY(180deg);
  background: #fff;
  border: none;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  /* 📟 Tablets (769px - 1024px) */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
  &:hover {
    color: #4caf50;
    transition: 0.3s ease;
  }
`;

function SignOutToggle({ toggle }) {
  return (
    <Toggle onClick={toggle}>
      <DropIcon />
    </Toggle>
  );
}

export default SignOutToggle;
