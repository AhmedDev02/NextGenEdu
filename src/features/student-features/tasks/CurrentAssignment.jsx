import { MdOutlineTask } from "react-icons/md";
import styled from "styled-components";
import { useEffect, useState } from "react";
import AddPrevTask from "./AddPrevTask";
import useShowAssignment from "./useShowAssignment";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";

const TasksDone = styled.div`
  width: clamp(50%, 90%, 100%);
  background-color: white;
  height: 14rem;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
  }
`;

const TaskDoneDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    position: static;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    transform: none;
  }
`;

const IconContainer = styled.div`
  color: white;
  width: 7rem;
  height: 7rem;
  background: var(--color-danger-red);
  border-radius: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const Icon = styled(MdOutlineTask)`
  font-size: 5rem;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const DoneOrNot = styled.div`
  width: 10rem;
  height: 4rem;
  border: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  @media (max-width: 768px) {
    width: 8rem;
    height: 3rem;
  }
`;
const DisplayFile = styled(DoneOrNot)`
  background: var(--color-danger-red);
  cursor: pointer;
  color: #fff;
  transition: all 0.2s;
  border: none;
  &:active {
    scale: 0.9;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  left: 5rem;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 768px) {
    flex-direction: row;
    position: static;
    transform: none;
    width: 16rem;
    height: 4rem;
    margin-top: 1rem;
  }
`;
const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
`;
const Description = styled.p`
  opacity: 0.6;
  font-weight: bold;
`;
const Deadline = styled.div`
  display: flex;
`;
const EndDate = styled.p`
  font-weight: bold;
`;
function CurrentAssignment({ data }) {
  const [isdone, setIsDone] = useState(true);
  const [isAnswered, setIsAnswered] = useState("");
  const {
    course,
    date,
    id,
    description,
    file,
    status,
    teacher,
    time,
    title,
    total_degree,
  } = data;
  const { data: ShowAssignment, error, isLoading } = useShowAssignment(id);

  useEffect(() => {
    setIsAnswered(ShowAssignment?.data?.answer_status);
    return () => {
      setIsAnswered("");
    };
  }, [ShowAssignment?.data?.answer_status]);

  useEffect(() => {
    function handleDone() {
      status === "finished" ? setIsDone(true) : setIsDone(false);
    }
    handleDone();
  }, [status]);

  const handleOpenFile = () => {
    if (file) {
      window.open(`https://${file}`, "_blank");
    }
  };
  if (isLoading) return <Spinner />;
  if (error) return toast.error("حدث خطأ في تحميل البيانات");
  return (
    <TasksDone>
      <TaskDoneDetails>
        <IconContainer>
          <Icon />
        </IconContainer>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {!isdone ? (
            <Deadline>
              <p>التسليم متاح حتي : </p>
              <EndDate>
                {date} {"--"} الساعة {time}
              </EndDate>
            </Deadline>
          ) : (
            ""
          )}
        </div>
      </TaskDoneDetails>
      {isdone ? (
        <ButtonsContainer>
          <DoneOrNot>
            <Title>انتهي</Title>
          </DoneOrNot>
          <DisplayFile onClick={handleOpenFile}>عرض الملف</DisplayFile>
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          {isAnswered ? (
            <AddPrevTask type="update" AssId={id} />
          ) : (
            <AddPrevTask AssId={id} />
          )}
          <DisplayFile onClick={handleOpenFile}>عرض الملف</DisplayFile>
        </ButtonsContainer>
      )}
    </TasksDone>
  );
}

export default CurrentAssignment;
