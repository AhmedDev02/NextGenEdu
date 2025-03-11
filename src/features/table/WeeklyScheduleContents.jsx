import styled from "styled-components";
import { schedules } from "./data";
import FilterButtons from "./FilterButton";
import { useStudentProgressContext } from "../../context/StudentProgressProvider";
import Table from "./Table";
const ScheduleContainer = styled.div`
  padding: 20px;
`;


function WeeklyScheduleContents() {
  const { selectedDays } = useStudentProgressContext();

  const filteredSchedules =
    selectedDays.length === 0 || selectedDays.includes("كل الأيام")
      ? schedules
      : schedules.filter((schedule) => selectedDays.includes(schedule.day));

  // const dayCounts = filteredSchedules.reduce((acc, schedule) => {
  //   acc[schedule.day] = (acc[schedule.day] || 0) + 1;
  //   return acc;
  // }, {});

  return (
    <ScheduleContainer>
      <FilterButtons />
      <Table filteredSchedules={filteredSchedules} />
    </ScheduleContainer>
  );
}

export default WeeklyScheduleContents;
