import styled from "styled-components";
import PostHeaderManagement from "./PostHeaderManagement";
import PostMessageManagement from "./PostMessageManagement";
import PostFooterManagement from "./PostFooterManagement";

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

function PostManagement({ children, notice = null, postInformation }) {
  // children here represents the message

  return (
    <PostBody>
      <PostHeaderManagement headerInfo={postInformation} />
      <PostMessageManagement msg={children} notice={notice} />
      <PostFooterManagement footerInfo={postInformation} />
    </PostBody>
  );
}

export default PostManagement;
