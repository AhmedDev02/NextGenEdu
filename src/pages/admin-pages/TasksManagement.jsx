import TasksManagementContent from "../../features/admin-features/tasks-management/TasksManagementContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

function TasksManagement() {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.ASSIGNMENT_ADMIN.title}
        description={ADMIN_PAGES_PROPERTIES.ASSIGNMENT_ADMIN.description}
        button={false}
      />
      <TasksManagementContent />
    </>
  );
}

export default TasksManagement;
