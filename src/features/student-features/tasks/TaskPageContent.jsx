import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useGetAssignment } from "./useGetAssignment";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";
import CurrentAssignment from "./CurrentAssignment";

const Container = styled.div`
  max-width: 100rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem;
    gap: 1.5rem;
  }
`;

function TaskPageContent() {
  const { courseId } = useParams();
  const { assignmentData, error, isLoading } = useGetAssignment(courseId);
  if (isLoading) return <Spinner />;
  if (error) return toast.error("خطأ في تحميل المهام الخاصه بهذه الماده");
  return (
    <Container>
      {assignmentData.data.map((assignment) => (
        <CurrentAssignment data={assignment} key={assignment.id} />
      ))}
    </Container>
  );
}

export default TaskPageContent;
