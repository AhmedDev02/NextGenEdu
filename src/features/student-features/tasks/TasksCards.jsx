import styled from "styled-components";
import Button from "../../../ui/Button";
import { useGetCourses } from "./useGetAssignments";
import Spinner from "../../../ui/amr/Spinner";
import ErrorFallback from "../../../ui/amr/ErrorFallBack";
import Empty from "../../../ui/amr/Empty";

const CardFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-primary);
  border-radius: var(--border-radius-lg);
  background-color: #fff;
  overflow: hidden;

  /* This is the key for the responsive behavior in Flexbox */
  flex: 1 1 300px;
  max-width: 300px;
`;

const Img = styled.img`
  width: 100%;
  height: 20rem;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2rem;
  gap: 0.5rem;
`;

const H4 = styled.h4`
  font-weight: var(--font-weight-semibold);
  font-size: 1.8rem;
`;

const H5 = styled.h5`
  font-weight: var(--font-weight-medium);
  opacity: 0.7;
  font-size: 1.4rem;
  margin-bottom: auto;
`;

const Br = styled.div`
  display: block;
  margin-top: 2rem;
  height: 1px;
  background-color: var(--color-grey-400);
  opacity: 0.5;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  padding: 0 2rem 2rem 2rem;
`;

function TasksCards() {
  const { assignmentsData, isPending, error, refetch } = useGetCourses();

  if (isPending) return <Spinner />;

  if (error) {
    return (
      <ErrorFallback message="خطأ في عرض المواد الدراسية" onRetry={refetch} />
    );
  }

  if (!assignmentsData || assignmentsData.data.length === 0) {
    return <Empty resourceName="معلومات" />;
  }

  return (
    <CardFlexContainer>
      {assignmentsData?.data.map((card) => (
        <StyledCard key={card.id}>
          <Img src={"/logo.png"} alt={card.name} />
          <CardContent>
            <H4>{card.name}</H4>
            <H5>
              {card.semester.name} / {card.department.name}
            </H5>
            <Br />
          </CardContent>
          <ButtonWrapper>
            <Button
              variation="primary"
              size="large"
              styles="fullWidth"
              navigateTo={`/tasks/${card.id}`}
            >
              رؤية المهام
            </Button>
          </ButtonWrapper>
        </StyledCard>
      ))}
    </CardFlexContainer>
  );
}

export default TasksCards;
