import styled from "styled-components";

const StyledChatContainer = styled.div`
  box-shadow: var(--shadow-primary);
  width: 800px;
  height: 550px;
  background-color: #fff;
  border-radius: 20px 20px 0px 0px;
  padding: 20px;
`;

function ChatContainer({ children }) {
  return <StyledChatContainer>{children}</StyledChatContainer>;
}

export default ChatContainer;
