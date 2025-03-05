import WeeklyScheduleContents from "../features/table/WeeklyScheduleContents";
import ContentHeader from "../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../utils/constants";

function WeeklySchedule() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.WEEKLY_SCHEDULE.title}
        description={STUDENT_PAGES_PROPERTIES.WEEKLY_SCHEDULE.description}
        button={false}
      />
      <WeeklyScheduleContents />
    </>
  );
}

export default WeeklySchedule;
