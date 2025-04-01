import LastTasksContent from "../../features/admin-features/tasks-management/LastTasksContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const LastTasks = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.OLD_ASSIGNMENT.title}
        description={ADMIN_PAGES_PROPERTIES.OLD_ASSIGNMENT.description}
        button={false}
      />
      <LastTasksContent />
    </>
  );
};

export default LastTasks;
