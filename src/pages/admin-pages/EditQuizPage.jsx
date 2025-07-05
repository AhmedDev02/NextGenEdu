import EditQuizForm from "../../features/admin-features/quiz-management/ScheduledQuiz/EditQuizForm";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const EditQuizPage = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.QUIZ_EDIT.title}
        description={ADMIN_PAGES_PROPERTIES.QUIZ_EDIT.description}
        button={true}
      />
      <EditQuizForm />
    </>
  );
};

export default EditQuizPage;
