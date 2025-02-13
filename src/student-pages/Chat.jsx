import ContentHeader from "../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../utils/constants";

function Chat() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.CHAT.title}
        description={STUDENT_PAGES_PROPERTIES.CHAT.description}
        button={false}
      />
    </>
  );
}

export default Chat;
