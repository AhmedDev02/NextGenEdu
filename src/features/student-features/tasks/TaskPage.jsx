import TaskPageContent from "./TaskPageContent";
import ContentHeader from "../../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../../utils/constants";

function TaskPage() {
  return (
    <>
      <ContentHeader
        button={false}
        title={STUDENT_PAGES_PROPERTIES.MATERIAL_TASK.title}
        description={STUDENT_PAGES_PROPERTIES.MATERIAL_TASK.description}
      />
      <TaskPageContent />
    </>
  );
}

export default TaskPage;
