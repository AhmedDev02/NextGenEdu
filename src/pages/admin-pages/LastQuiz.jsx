import LastQuizContent from "../../features/admin-features/quiz-management/LastQuiz/LastQuizContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const LastQuiz = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.OLD_QUIZ.title}
        description={ADMIN_PAGES_PROPERTIES.OLD_QUIZ.description}
        button={true}
      />
      <LastQuizContent />
    </>
  );
};

export default LastQuiz;