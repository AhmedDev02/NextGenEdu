import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

function QuizzesManagement() {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.QUIZZES_ADMIN.title}
        description={ADMIN_PAGES_PROPERTIES.QUIZZES_ADMIN.description}
        button={false}
      />
    </>
  );
}

export default QuizzesManagement;
