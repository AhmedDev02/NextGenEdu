import styled from "styled-components";
import PostHeader from "./PostHeader";
import PostMessage from "./PostMessage";
import PostFooter from "./PostFooter";

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin: 0 auto;
  height: auto;
  background-color: white;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: var(--shadow-primary);
`;

/* Footer consists of only one part*/

function Post({ notice = null, postInformation }) {
  // children here represents the message
  const {
    body,
    course,
    date,
    department,
    from,
    id,
    semester,
    time,
    title,
    user,
  } = postInformation;
  return (
    <PostBody>
      <PostHeader date={date} course={course} user={user} />
      <PostMessage title={title} msg={body} notice={notice} />
      <PostFooter user={user} />
    </PostBody>
  );
}

export default Post;
