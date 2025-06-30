import styled from "styled-components";
import { ANNOUNCEMENT, NOTICE } from "../../../utils/constants";

const MessagePost = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 1rem;
  padding: 0 1rem; /* Add slight horizontal padding for alignment */
`;

const MessageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: var(--font-weight-bold);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const MessageBody = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-800);
  line-height: 1.7;
  margin: 0;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MessageNotice = styled.p`
  font-size: 1.4rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-red-700, #b91c1c);
  margin: 0;
`;

const NoticeLabel = styled.span`
  font-weight: var(--font-weight-bold);
`;

function PostMessage({ msg, notice, title }) {
  return (
    <MessagePost>
      <MessageTitle>{title || ANNOUNCEMENT}</MessageTitle>
      <MessageBody>{msg}</MessageBody>
      {notice && (
        <MessageNotice>
          <NoticeLabel>{NOTICE}: </NoticeLabel>
          {notice}
        </MessageNotice>
      )}
    </MessagePost>
  );
}

export default PostMessage;
