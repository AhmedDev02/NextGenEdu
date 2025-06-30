import styled from "styled-components";
import { ANNOUNCEMENT } from "../../../utils/constants";

const MessagePost = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 1rem;
  padding: 0 1rem;
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

function PostMessageManagement({ title, msg }) {
  return (
    <MessagePost>
      <MessageTitle>
        {ANNOUNCEMENT}: {title}
      </MessageTitle>
      <MessageBody>{msg}</MessageBody>
    </MessagePost>
  );
}

export default PostMessageManagement;
