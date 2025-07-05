import QuizResults from "../../features/admin-features/quiz-management/LastQuiz/QuizResults";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const QuizResultPage = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES. QUIZ_RESULTS.title}
        description={ADMIN_PAGES_PROPERTIES. QUIZ_RESULTS.description}
        button={true}
      />
      <QuizResults  />
    </>
  );
};

export default QuizResultPage;