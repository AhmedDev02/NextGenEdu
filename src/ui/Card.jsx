import styled from "styled-components";
import Button from "./Button";

const StyledCard = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  box-shadow: var(--shadow-primary);
  border-radius: var(--border-radius-lg);
  gap: 10px;
  background-color: #fff;
`;
const Img = styled.img`
  width: 100%;
  object-fit: contain;
  /* margin-bottom: auto; */
`;
const H4 = styled.h4`
  margin-top: 10px;
  text-align: right;
  font-weight: var(--font-weight-semibold);
`;
const H5 = styled.h5`
  text-align: left;
  font-weight: var(--font-weight-medium);
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

function Card({
  src,
  alt,
  subjectName,
  progressCheck,
  percentageApi,
  cardButton,
  doctorName,
}) {
  const { percentage } = percentageApi;
  return (
    <StyledCard>
      <Img src={src} alt={alt} />
      <H4>{subjectName}</H4>
      <H5>{doctorName}</H5>
      <Br />
      <Div>
        <Button
          variation="primary"
          size="custom"
          paddingTopBottom="10px"
          paddingLeftRight="60px"
          styles={"border"}
        >
          {cardButton}
        </Button>
        {progressCheck && <Span>{`${percentage} مكتمل `}</Span>}
      </Div>
    </StyledCard>
  );
}

export default Card;
