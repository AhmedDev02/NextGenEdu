import ExamsContent from "../../features/exams/ExamsContent";
import ContentHeader from "../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../utils/constants";

function Exams() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.EXAMS.title}
        description={STUDENT_PAGES_PROPERTIES.EXAMS.description}
        button={false}
      />
      <ExamsContent />
    </>
  );
}

export default Exams;
