import styled from "styled-components";
import ChatForm from "./ChatForm";

const Div = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  height: 40px;
`;
function ChatFooter() {
  return (
    <Div>
      <ChatForm />
    </Div>
  );
}

export default ChatFooter;
