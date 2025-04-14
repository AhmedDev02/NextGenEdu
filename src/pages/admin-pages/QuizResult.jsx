import QuizResultContent  from "../../features/admin-features/quiz-management/QuizResultContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const QuizResult = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES. QUIZ_RESULTS.title}
        description={ADMIN_PAGES_PROPERTIES. QUIZ_RESULTS.description}
        button={false}
      />
      <QuizResultContent  />
    </>
  );
};

export default QuizResult;