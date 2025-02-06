import styled from "styled-components";
import { ANNOUNCEMENT, NOTICE } from "../utils/constants";

const MessagePost = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  padding: 0 6.5rem;
  text-align: right;
`;

const MessageAnnouncement = styled.span`
  font-size: 1.4rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 10px;
`; // This is a fixed component

const MessageBody = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-900);
  text-align: right;
`; // This is a dynamic component

const MessageNotice = styled.p`
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: var(--font-weight-semibold);
`; // This is a fixed component

const Span = styled.span`
  font-size: 1.3rem;
  font-weight: var(--font-weight-bold);
`;
function PostMessage({ msg, notice }) {
  return (
    <MessagePost>
      <MessageAnnouncement>{ANNOUNCEMENT}</MessageAnnouncement>
      <MessageBody>{msg}</MessageBody>
      {notice && (
        <MessageNotice>
          <Span>{NOTICE}</Span>
          {notice}
        </MessageNotice>
      )}
    </MessagePost>
  );
}

export default PostMessage;
