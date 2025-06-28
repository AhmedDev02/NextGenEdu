import styled from "styled-components";
import Button from "./Button";

const StyledCard = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow-primary);
  border-radius: var(--border-radius-lg);
  gap: 10px;
  background-color: #fff;
  ${({ style }) => style}
`;
const Img = styled.img`
  width: 100%;
  object-fit: contain;
  height: 50%;
  /* margin-bottom: auto; */
`;
const H4 = styled.h4`
  margin-top: 10px;
  text-align: center;
  font-weight: var(--font-weight-medium);
`;
const H5 = styled.h5`
  text-align: center;
  font-weight: var(--font-weight-bold);
`;

const Br = styled.div`
  display: block;
  margin: 1rem 0;
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
  font-size: 1.4rem;
  background-color: var(--color-active);
  color: var(--color-green);
  padding: 10px 5px;
  border-radius: var(--border-radius-lg);
  border: var(--color-green) 2px solid;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

function Card({
  src,
  alt,
  description,
  progressCheck,
  percentage,
  cardButton,
  courseName,
  navigateTo,
  children,
  cardStyle,
  subjectName,
}) {
  return (
    <StyledCard style={cardStyle}>
      <Img src={src} alt={alt} />
      <Br />
      <H5>{courseName}</H5>
      {/* <H5>{subjectName}</H5> */}
      <H4>{description}</H4>
      <Br />
      <Div>
        {!children ? (
          <>
            <Button
              variation="primary"
              size="custom"
              paddingTopBottom="10px"
              paddingLeftRight="60px"
              styles={"border"}
              navigateTo={navigateTo}
            >
              {cardButton}
            </Button>
            {progressCheck && <Span>{`${percentage} مكتمل `}</Span>}
          </>
        ) : (
          <ButtonDiv>{children}</ButtonDiv>
        )}
      </Div>
    </StyledCard>
  );
}

export default Card;
