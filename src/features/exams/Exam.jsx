import ContentHeader from "../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../utils/constants";
import MaterialExamContent from "./MaterialExamContent";

function Exam() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.MATERIAL_EXAM.title}
        subject={"البرمجة الكونية"}
        description={STUDENT_PAGES_PROPERTIES.MATERIAL_EXAM.description}
        button={true}
      />
      <MaterialExamContent />
    </>
  );
}

export default Exam;
