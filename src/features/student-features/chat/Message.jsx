import styled from "styled-components";

const StyledMessage = styled.div`
  background-color: ${({ isUser }) => (isUser ? "#2A3248" : "#6D778A")};
  color: #fff;
  padding: 10px 15px;
  border-radius: 15px;
  margin-top: auto;
  max-width: 70%;
  align-self: ${({ isUser }) => (isUser ? "flex-start" : "flex-end")};
  display: flex;
  gap: 10px;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  hyphens: auto;
`;

const Img = styled.img`
  position: relative;
  width: 30px;
  height: 30px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 10px solid transparent;

    ${({ isUser }) =>
      isUser
        ? `left: 100%; border-left-color: #2A3248;`
        : `right: 100%; border-right-color: #6D778A;`}
  }
  border-radius: 50%;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  align-self: ${({ isUser }) => (isUser ? "flex-start" : "flex-end")};
  margin: 0 10px;

  gap: 10px;
  justify-content: center;
  flex-direction: column;
`;
const User = styled.strong``;

const Container = styled.div`
  display: flex;
  justify-content: ${({ isUser }) => (isUser ? "flex-start" : "flex-end")};
`;

const Div = styled.div`
  display: flex;
`;

function Message({ isUser, className, text, name }) {
  console.log(isUser);
  return (
    <Container isUser={isUser}>
      {isUser ? (
        <Div isUser={isUser}>
          <UserInfo isUser={isUser}>
            <User>{name}</User>
            <Img src="https://picsum.photos/200/300" className={className} />
          </UserInfo>
          <StyledMessage isUser={isUser} className={className}>
            {text}
          </StyledMessage>
        </Div>
      ) : (
        <Div isUser={isUser}>
          <StyledMessage isUser={isUser} className={className}>
            {text}
          </StyledMessage>
          <UserInfo isUser={isUser}>
            <User>{name}</User>
            <Img src="https://picsum.photos/200/300" className={className} />
          </UserInfo>
        </Div>
      )}
    </Container>
  );
}

export default Message;
