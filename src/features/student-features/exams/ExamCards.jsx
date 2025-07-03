import styled from "styled-components";
import Button from "../../../ui/Button";
import { useReadQuizzes } from "./useReadQuizzes";
import Spinner from "../../../ui/amr/Spinner";

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
  flex-direction: row;
  gap: 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

function ExamCards() {
  const { exams: data, isPending } = useReadQuizzes();

  const exams = data?.data;
  console.log(exams);
  if (isPending) return <Spinner />;
  return (
    <Div>
      {exams?.map((card, index) => (
        <StyledCard key={index}>
          <Img src={"../../../public/logo.png"} alt={"logo"} />
          <H4>{card.title}</H4>
          <H5>{card.teacher}</H5>
          <Br />
          <Div>
            <Button
              variation="primary"
              size="custom"
              paddingTopBottom="10px"
              paddingLeftRight="60px"
              styles={"border"}
              // navigateTo={`/exams/${card.id}${card.course.id}`}
              navigateTo={`/exams/${card.id}`}
            >
              رؤيةالإختبارات
            </Button>
          </Div>
        </StyledCard>
      ))}
    </Div>
  );
}

export default ExamCards;
