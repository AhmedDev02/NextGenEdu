import ContentHeader from "../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../utils/constants";
import AnswersContent from "./AnswersContent";

function Answers() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.DISCUSSION_ANSWERS.title}
        description={STUDENT_PAGES_PROPERTIES.DISCUSSION_ANSWERS.description}
        button={true}
      />
      <AnswersContent />
    </>
  );
}

export default Answers;
