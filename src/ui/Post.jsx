import styled from "styled-components";
import PostHeader from "./PostHeader";
import PostMessage from "./PostMessage";
import PostFooter from "./PostFooter";

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  height: auto;
  background-color: white;
  border-radius: 25px;
  padding: 10px;
  box-shadow: var(--shadow-primary);
`;

/* Footer consists of only one part*/

function Post({ children, notice = null, postInformation }) {
  // children here represents the message

  return (
    <PostBody>
      <PostHeader headerInfo={postInformation} />
      <PostMessage msg={children} notice={notice} />
      <PostFooter footerInfo={postInformation} />
    </PostBody>
  );
}

export default Post;
