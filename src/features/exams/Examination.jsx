import ContentHeader from "../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../utils/constants";
import ExaminationContent from "./ExaminationContent";

function Examination() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.EXAMINATION.title}
        subject={"البرمجة الكونية"}
        button={false}
      />
      <ExaminationContent timeLeft={"0:02:25"} />
    </>
  );
}

export default Examination;
