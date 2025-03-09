import { MdOutlineTask } from "react-icons/md";
import styled from "styled-components";
import { useEffect, useState } from "react";
import AddPrevTask from "./AddPrevTask";

const TasksDone = styled.div`
  width: clamp(50%, 80%, 90%);
  background-color: white;
  height: 14rem;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const TaskDoneDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  right: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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
`;
const Icon = styled(MdOutlineTask)`
  font-size: 5rem;
`;
const DoneOrNot = styled.div`
  width: 10rem;
  height: 5rem;
  position: absolute;
  left: 5rem;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
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
