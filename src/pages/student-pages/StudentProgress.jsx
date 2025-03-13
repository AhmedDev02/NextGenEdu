import StudentProgressContent from "../../features/student-features//studentProgress/StudentProgressContent";
import ContentHeader from "../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../utils/constants";

function StudentProgress() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.STUDENT_PROGRESS.title}
        description={STUDENT_PAGES_PROPERTIES.STUDENT_PROGRESS.description}
        button={false}
      />
      <StudentProgressContent />
    </>
  );
}

export default StudentProgress;
