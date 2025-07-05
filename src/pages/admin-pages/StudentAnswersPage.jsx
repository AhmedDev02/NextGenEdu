import StudentAnswers from "../../features/admin-features/quiz-management/LastQuiz/StudentAnswers";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const StudentAnswersPage = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.STUDENT_ANSWERS.title}
        description={ADMIN_PAGES_PROPERTIES.STUDENT_ANSWERS.description}
        button={true}
      />
      <StudentAnswers />
    </>
  );
};

export default StudentAnswersPage;
