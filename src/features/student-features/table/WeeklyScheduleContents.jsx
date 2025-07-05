import styled from "styled-components";
import FilterButtons from "./FilterButton";
import StudentTable from "./StudentTable";

const ScheduleContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

function WeeklyScheduleContents() {
  return (
    <ScheduleContainer>
      <FilterButtons />
      <StudentTable />
    </ScheduleContainer>
  );
}

export default WeeklyScheduleContents;
