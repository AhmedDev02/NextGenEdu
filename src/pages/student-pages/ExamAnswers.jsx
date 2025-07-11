import ShowExamAnswersContent from "../../features/student-features/exams/ShowExamAnswersContent";
import ContentHeader from "../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../utils/constants";

function ExamAnswers() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.ANSWERS.title}
        description={STUDENT_PAGES_PROPERTIES.ANSWERS.description}
        button={true}
      />
      <ShowExamAnswersContent />
    </>
  );
}

export default ExamAnswers;
