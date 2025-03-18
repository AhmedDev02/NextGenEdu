import styled from "styled-components";

const StyledChatContainer = styled.div`
  box-shadow: var(--shadow-primary);
  height: 100vh;
  margin-top: auto;
  max-width: 100%;
  background-color: #fff;
  border-radius: 20px 20px 0px 0px;
  padding: 20px;
  @media (max-width: 768px) {
    height: 86dvh;
    margin-top: auto;
    margin-right: auto;
    margin-left: auto;
    padding: 80px;
    padding-bottom: 0;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
    height: 85vh;
    margin-top: auto;
    margin-right: auto;
    margin-left: auto;
    padding: 80px;
    padding-bottom: 0;
  }
`;

function ChatContainer({ children }) {
  return <StyledChatContainer>{children}</StyledChatContainer>;
}

export default ChatContainer;
