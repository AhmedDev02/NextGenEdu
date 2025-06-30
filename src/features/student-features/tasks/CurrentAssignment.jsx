import styled from "styled-components";
import { MdOutlineTask } from "react-icons/md";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AddPrevTask from "./AddPrevTask";
import useShowAssignment from "./useShowAssignment";
import ErrorFallback from "../../../ui/amr/ErrorFallBack";

const AssignmentContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-left: 5px solid var(--color-primary-green);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const IconContainer = styled.div`
  color: white;
  width: 7rem;
  height: 7rem;
  background: var(--color-primary-green);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;

const Icon = styled(MdOutlineTask)`
  font-size: 4.5rem;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  opacity: 0.7;
  font-size: 1.4rem;
  margin: 0;
`;

const Deadline = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--color-red-700, #b91c1c);
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
`;

const StatusButton = styled.div`
  width: 11rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
`;

const FinishedStatus = styled(StatusButton)`
  border: 2px solid var(--color-grey-300, #d1d5db);
  color: var(--color-grey-500, #6b7286);
`;

const FileButton = styled(StatusButton)`
  background: var(--color-primary-green);
  cursor: pointer;
  color: #fff;
  border: none;
  transition: background-color 0.2s, transform 0.2s;

  /* &:hover {
    background: var(--color-primary-green-dark, #059669);
  } */

  &:active {
    transform: scale(0.95);
  }
`;

function CurrentAssignment({ data }) {
  const { id, title, description, status, file, date, time } = data;

  const [isFinished, setIsFinished] = useState(status === "finished");
  const [isAnswered, setIsAnswered] = useState(false);

  const { data: ShowAssignment, error, refetch } = useShowAssignment(id);

  useEffect(() => {
    setIsFinished(status === "finished");
  }, [status]);

  useEffect(() => {
    if (ShowAssignment?.data) {
      setIsAnswered(ShowAssignment.data.answer_status);
    }
  }, [ShowAssignment]);

  const handleOpenFile = () => {
    if (file) {
      window.open(`https://${file}`, "_blank");
    } else {
      toast.error("لا يوجد ملف لعرضه");
    }
  };
  if (error) {
    return (
      <ErrorFallback message="حدث خطأ اثناء عرض الواجب" onRetry={refetch} />
    );
  }

  return (
    <AssignmentContainer>
      <DetailsWrapper>
        <IconContainer>
          <Icon />
        </IconContainer>
        <TextContent>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {!isFinished && (
            <Deadline>
              التسليم متاح حتى: {date} - الساعة {time}
            </Deadline>
          )}
        </TextContent>
      </DetailsWrapper>

      <ButtonsContainer>
        {isFinished ? (
          <FinishedStatus>انتهى</FinishedStatus>
        ) : isAnswered ? (
          <AddPrevTask type="update" AssId={id} />
        ) : (
          <AddPrevTask AssId={id} />
        )}
        <FileButton onClick={handleOpenFile}>عرض الملف</FileButton>
      </ButtonsContainer>
    </AssignmentContainer>
  );
}

export default CurrentAssignment;
