import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

function WeeklyScheduleManagement() {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.WEEKLY_SCHEDULE_ADMIN.title}
        description={ADMIN_PAGES_PROPERTIES.WEEKLY_SCHEDULE_ADMIN.description}
        button={false}
      />
    </>
  );
}

export default WeeklyScheduleManagement;
