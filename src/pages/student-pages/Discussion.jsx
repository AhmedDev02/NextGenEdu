import DiscussionContent from "../../features/discussion/DiscussionContent";
import ContentHeader from "../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../utils/constants";

function Discussion() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.DISCUSSION.title}
        description={STUDENT_PAGES_PROPERTIES.DISCUSSION.description}
        button={false}
      />
      <DiscussionContent />
    </>
  );
}

export default Discussion;
