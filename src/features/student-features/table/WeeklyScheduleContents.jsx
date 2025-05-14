import styled from "styled-components";
import FilterButtons from "./FilterButton";
import Table from "./Table";
const ScheduleContainer = styled.div`
  padding: 20px;
`;

function WeeklyScheduleContents() {

  return (
    <ScheduleContainer>
      <FilterButtons />
      <Table />
    </ScheduleContainer>
  );
}

export default WeeklyScheduleContents;
