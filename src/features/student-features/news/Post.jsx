import styled from "styled-components";
import PostHeader from "./PostHeader";
import PostMessage from "./PostMessage";
import PostFooter from "./PostFooter";

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 80rem; /* Prevents it from being too wide on large screens */
  background-color: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-primary);

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

function Post({ notice = null, postInformation }) {
  const { body, course, date, id, title, user } = postInformation;

  return (
    <PostBody>
      <PostHeader date={date} course={course} user={user} />
      <PostMessage title={title} msg={body} notice={notice} />
      <PostFooter user={user} />
    </PostBody>
  );
}

export default Post;
