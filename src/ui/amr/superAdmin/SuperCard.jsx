import styled from "styled-components";
import SuperButton from "./SuperButton";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow-primary);
  border-radius: var(--border-radius-lg);
  padding: 1rem;
  gap: 1rem;
  background-color: #fff;
  ${({ style }) => style}
`;
const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;
const H4 = styled.h4`
  text-align: right;
  font-weight: var(--font-weight-semibold);
  font-weight: bold;
`;
const H5 = styled.h5`
  text-align: left;
  font-weight: var(--font-weight-medium);
`;

const Br = styled.div`
  display: block;
  margin-bottom: 0;
  height: 1px;
  background-color: var(--color-grey-400);
  opacity: 0.8;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: auto;
  gap: 10px;
`;
const Span = styled.span`
  /* font-size: 1.4rem;
  background-color: var(--color-active);
  color: var(--color-green);
  padding: 10px 5px;
  border-radius: var(--border-radius-lg);
  border: var(--color-green) 2px solid; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  font-size: 5rem;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 90%; */
  gap: 5px;
`;
const P = styled.p`
  font-size: 3rem;
`;

const SuperCard = ({ Buttons, data }) => {
  const {
    id,
    name,
    description,
    teachers,
    courses,
    students,
  } = data;
  return (
    <StyledCard>
      <Img src="/logo.png" alt="logo" />
      <Br />
      <H4>{name}</H4>
      {teachers > 0 && <H5> عدد الأساتذة: {teachers || 0}</H5>}
      {students > 0 && <H5> عدد الطلاب: {students}</H5>}
      {description && <H5>{description}</H5>}
      <Br />
      <Div>
        <ButtonDiv>
          {Buttons.map((element, index) => (
            <SuperButton
              key={index}
              variation={element.variation}
              size={element.size}
              paddingTopBottom="10px"
              paddingLeftRight="60px"
              styles={"border"}
              path={element.path}
              state={element.state}
              id={id}
            >
              <Span>
                <P>{element.logo}</P>
                <P>{element.label}</P>
              </Span>
            </SuperButton>
          ))}
        </ButtonDiv>
      </Div>
    </StyledCard>
  );
};

export default SuperCard;
