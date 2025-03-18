import ChatContent from "../../features/student-features/chat/ChatContent";
import ContentHeader from "../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../utils/constants";

function Chat() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.CHAT.title}
        description={STUDENT_PAGES_PROPERTIES.CHAT.description}
        button={false}
      />
      <ChatContent />
    </>
  );
}

export default Chat;
