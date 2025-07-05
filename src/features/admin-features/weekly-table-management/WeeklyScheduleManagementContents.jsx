import styled from "styled-components";
import FilterButtons from "./FilterButton";
import TeacherTable from "./TeacherTable";

const ScheduleContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

function WeeklyScheduleManagementContents() {
  return (
    <ScheduleContainer>
      <FilterButtons />
      <TeacherTable />
    </ScheduleContainer>
  );
}

export default WeeklyScheduleManagementContents;