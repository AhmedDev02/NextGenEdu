import styled from "styled-components";

import FilterButtons from "./FilterButton";
import TeacherTable from "./TeacherTable";

const ScheduleContainer = styled.div`
  padding: 20px;
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
