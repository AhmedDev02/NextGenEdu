import ContentHeader from "../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../utils/constants";

function Tasks() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.TASKS.title}
        description={STUDENT_PAGES_PROPERTIES.TASKS.description}
        button={false}
      />
    </>
  );
}

export default Tasks;
