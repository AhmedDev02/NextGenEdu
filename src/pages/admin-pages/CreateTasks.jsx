import CreateTasksContent from "../../features/admin-features/tasks-management/CreateTasksContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const CreateTasks = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.NEW_ASSIGNMENT.title}
        description={ADMIN_PAGES_PROPERTIES.NEW_ASSIGNMENT.description}
        button={false}
      />
      <CreateTasksContent />
    </>
  );
};

export default CreateTasks;
