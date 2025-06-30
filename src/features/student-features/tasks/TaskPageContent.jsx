import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useGetAssignment } from "./useGetAssignment";
import Spinner from "../../../ui/amr/Spinner";
import CurrentAssignment from "./CurrentAssignment";
import Empty from "../../../ui/amr/Empty";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";

const Container = styled.div`
  max-width: 100rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    width: 95%;
    gap: 1.5rem;
    padding: 1rem 0;
  }
`;

function TaskPageContent() {
  const { courseId } = useParams();
  const { assignmentData, error, isPending, refetch } =
    useGetAssignment(courseId);

  if (isPending) return <Spinner />;

  if (error) {
    return <ErrorFallBack message="خطأ في عرض المهام" onRetry={refetch} />;
  }

  if (!assignmentData || assignmentData.data.length === 0) {
    return <Empty resourceName="مهام" />;
  }

  return (
    <Container>
      {assignmentData.data.map((assignment) => (
        <CurrentAssignment data={assignment} key={assignment.id} />
      ))}
    </Container>
  );
}

export default TaskPageContent;
