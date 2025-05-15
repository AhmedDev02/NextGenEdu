import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import AllAssignments from "./AllAssignments";

// container content

const StyledTimeContainer = styled.div`
  box-shadow: var(--shadow-primary);
  margin: auto;
  width: 70%;
  height: 75px;
  background-color: #fff;
  border-radius: 15px 15px 15px 15px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767px) {
    width: 80%;
    justify-content: space-between;
  }
  @media (max-width: 1027px) and (min-width: 767px) {
    width: 75%;
  }
`;
const StyledButtonFilter = styled.button`
  padding-inline: 16px;
  background: linear-gradient(to bottom, #30bd58, #399f63);
  border-radius: 12px;
  width: 27%;
  height: 46px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  line-height: 36.8px;
  font-family: Changa;
  outline: none;
  border: 0;

  @media (max-width: 767px) {
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    width: 35%;
  }
  @media (max-width: 1027px) and (min-width: 767px) {
    width: 31%;
    font-size: 12px;
  }
`;
const StyledInputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 70%;

  input {
    width: 100%;
    border-radius: 12px;
    padding-inline: 35px;
    background-color: #f1f1f1;
    height: 46px;
    color: #6d778a;
    font-size: 15px;
    font-weight: 500;
    line-height: 36.8px;
    font-family: Changa;
    text-align: right;
    outline: none;
    overflow: visible;
    text-overflow: ellipsis;
    border: 0;
    &:focus {
      border: 1px solid black;
    }

    @media (max-width: 767px) {
      font-size: 12px;
      font-weight: 500;
      line-height: 12px;
      width: 95%;
      margin-inline: 15px;
      padding-inline: 30px;
    }

    @media (max-width: 1027px) and (min-width: 767px) {
      font-size: 12px;
      width: 95%;
      padding-inline: 25px;
      margin-inline: 20px;
    }
  }
`;

const StyledArrowIcon = styled(SlArrowDown)`
  font-size: 14px;
  transform: translate(0px, 3px);

  @media (max-width: 767px) {
    font-size: 11px;
  }
`;
const StyledSearchIcon = styled(GoSearch)`
  font-size: 17px;
  position: absolute;
  transform: translate(-10px, 15px);

  @media (max-width: 1027px) and (min-width: 767px) {
    font-size: 16px;
    transform: translate(-25px, 15px);
  }

  @media (max-width: 767px) {
    font-size: 13px;
    transform: translate(-25px, 16px);
  }
`;

// available task content

const AvailableTasksContent = () => {
  return (
    <>
      <StyledTimeContainer>
        <StyledButtonFilter>
          الأيام السبعة القادمين
          <StyledArrowIcon />
        </StyledButtonFilter>

        <StyledInputContainer>
          <StyledSearchIcon />
          <input
            type="text"
            placeholder="ابحث عن أسايمنت معين باستخدام العنوان، تاريخ التسليم.."
          />
        </StyledInputContainer>
      </StyledTimeContainer>

      <AllAssignments />
    </>
  );
};

export default AvailableTasksContent;
