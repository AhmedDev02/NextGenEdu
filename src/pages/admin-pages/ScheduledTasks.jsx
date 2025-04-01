import AvailableTasksContent from "../../features/admin-features/tasks-management/AvailableTasksContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const ScheduledTasks = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.SCHEDULED_ASSIGNMENT.title}
        description={ADMIN_PAGES_PROPERTIES.SCHEDULED_ASSIGNMENT.description}
        button={false}
      />
      <AvailableTasksContent />
    </>
  );
};

export default ScheduledTasks;
