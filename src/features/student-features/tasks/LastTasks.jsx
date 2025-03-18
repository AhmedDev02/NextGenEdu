import { MdOutlineTask } from "react-icons/md";
import styled from "styled-components";
import { useEffect, useState } from "react";
import AddPrevTask from "./AddPrevTask";

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
  width: 14rem;
  height: 6rem;
  position: absolute;
  left: 5rem;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    width: 8rem;
    height: 4rem;
    margin-top: 1rem;
  }
`;

function LastTasks({ status, title, week }) {
  const [isdone, setIsDone] = useState(true);

  useEffect(() => {
    function handleDone() {
      setIsDone(status);
    }
    handleDone();
  }, [status]);
  return (
    <TasksDone>
      <TaskDoneDetails>
        <IconContainer>
          <Icon />
        </IconContainer>
        <div>
          <p style={{ fontSize: "3rem", fontWeight: "bold" }}>{title}</p>
          <p style={{ opacity: "0.6", fontWeight: "bold" }}>{week}</p>
          {!isdone ? (
            <p>
              التسليم متاح حتي :{" "}
              <span style={{ fontWeight: "bold" }}> الخميس 10 مساء</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </TaskDoneDetails>
      {isdone ? (
        <DoneOrNot>
          <p style={{ fontSize: "3rem", fontWeight: "600" }}>انتهي</p>
        </DoneOrNot>
      ) : (
        <AddPrevTask />
      )}
    </TasksDone>
  );
}

export default LastTasks;
