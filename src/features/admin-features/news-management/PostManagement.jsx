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

function PostManagement({ notice = null, postInformation }) {
  // children here represents the message
  const { title, body, date, time, from, department, semester, course, user } =
    postInformation;
  return (
    <PostBody>
      <PostHeaderManagement
        headerInfo={{
          ...user,
          date: date,
          subject: title,
          department: department.name,
        }}
      />
      <PostMessageManagement msg={body} notice={notice} />
      <PostFooterManagement footerInfo={user} />
    </PostBody>
  );
}

export default PostManagement;
