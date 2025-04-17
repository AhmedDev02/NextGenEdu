import LastTasksResults  from "../../features/admin-features/tasks-management/LastTasksResults";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const TasksResults = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES. ASSIGNMENT_RESULTS.title}
        description={ADMIN_PAGES_PROPERTIES. ASSIGNMENT_RESULTS.description}
        button={false}
      />
      <LastTasksResults  />
    </>
  );
};

export default TasksResults;