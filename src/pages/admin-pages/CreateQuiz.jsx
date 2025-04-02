import CreateQuizContent from "../../features/admin-features/quiz-management/CreateQuiz/CreateQuizContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const CreateQuiz = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.NEW_QUIZ.title}
        description={ADMIN_PAGES_PROPERTIES.NEW_QUIZ.description}
        button={false}
      />
      <CreateQuizContent />
    </>
  );
};

export default CreateQuiz;