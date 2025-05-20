import styled from "styled-components";
import Button from "../../../ui/Button";
import { useGetCourses } from "./useGetAssignments";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";
// import { useTasks } from "./useTasks";

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
  height: 50%;
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
  opacity: 0.7;
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
  flex-wrap: wrap;
  justify-content: center;
  gap: 7rem;
`;

function TasksCards() {
  const { assignmentsData, isLoading, error } = useGetCourses();

  if (isLoading) return <Spinner />;
  if (error) return toast.error("خطأ في تحميل المهام");

  return (
    <Div>
      {assignmentsData?.data.map((card) => (
        <StyledCard key={card.id}>
          <Img src={"/logo.png"} alt={"logo"} />
          <H4>{card.name}</H4>
          <H5>
            {card.semester.name} / {card.department.name}
          </H5>
          <Br />
          <Div>
            <Button
              variation="primary"
              size="custom"
              paddingTopBottom="10px"
              paddingLeftRight="60px"
              styles={"border"}
              navigateTo={`/tasks/${card.id}`}
            >
              رؤية المهام
            </Button>
          </Div>
        </StyledCard>
      ))}
    </Div>
  );
}

export default TasksCards;
