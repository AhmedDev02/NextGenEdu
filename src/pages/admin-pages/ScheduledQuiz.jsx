import ScheduledQuizContent from "../../features/admin-features/quiz-management/ScheduledQuiz/ScheduledQuizContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const ScheduledQuiz = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.SCHEDULED_QUIZ.title}
        description={ADMIN_PAGES_PROPERTIES.SCHEDULED_QUIZ.description}
        button={false}
      />
      <ScheduledQuizContent />
    </>
  );
};

export default ScheduledQuiz;