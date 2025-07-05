import QuizDetails from "../../features/admin-features/quiz-management/ScheduledQuiz/QuizDetails";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const QuizDetailsPage = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.QUIZ_DETAILS.title}
        description={ADMIN_PAGES_PROPERTIES.QUIZ_DETAILS.description}
        button={true}
      />
      <QuizDetails />
    </>
  );
};

export default QuizDetailsPage;
