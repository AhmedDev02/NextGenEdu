import styled from "styled-components";
import Button from "./Button";
import { HiArrowRight } from "react-icons/hi";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 10px;
  @media (max-width: 768px) {
    margin: 15px 5px;
    width: 85%;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;
const Subject = styled.span`
  justify-self: center;
  align-self: center;
  margin-top: 10px;
  padding: 0 100px;

  text-align: center;
  @media (max-width: 768px) {
    padding: 0 0px;
  }
`;
const H3 = styled.h3`
  justify-self: center;
  ${({ isButton }) => !isButton && `margin-right: 20px;`}
`;
const Div = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;

  margin-right: 20px;
  gap: 10px;
`;

function ContentHeader({ title, description, button, subject }) {
  return (
    <StyledHeader>
      {button ? (
        <Div>
          <Button navigateTo={-1} variation="secondary" size="small">
            <HiArrowRight />
          </Button>
          <H3 isButton={button}>
            {title} {subject}
          </H3>
        </Div>
      ) : subject ? (
        <Div>
          <H3 isButton={button}>
            {title} {subject}
          </H3>
        </Div>
      ) : (
        <H3 isButton={button}>{title}</H3>
      )}
      <Subject>{description}</Subject>
    </StyledHeader>
  );
}

export default ContentHeader;
