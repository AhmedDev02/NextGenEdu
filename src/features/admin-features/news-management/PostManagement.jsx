import styled from "styled-components";
import PostHeaderManagement from "./PostHeaderManagement";
import PostMessageManagement from "./PostMessageManagement";
import PostFooterManagement from "./PostFooterManagement";
import Modal from "../../../ui/amr/Modal";
import Button from "../../../ui/Button";
import AnnouncementEditWindow from "./AnnouncementEditWindow";
import AnnouncementDeleteWindow from "./AnnouncementDeleteWindow";
import { useDeleteAnnouncement } from "./useDeleteAnnouncement";

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

const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;
/* Footer consists of only one part*/

function PostManagement({ notice = null, postInformation }) {
  // children here represents the message
  const {
    id,
    title,
    body,
    date,
    time,
    from,
    department,
    semester,
    course,
    user,
  } = postInformation;

  const { mutate } = useDeleteAnnouncement();

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
      <PostMessageManagement title={title} msg={body} notice={notice} />
      <PostFooterManagement footerInfo={user} />
      <Div>
        <Modal>
          <Modal.Open opens="edit-announcement">
            <Button
              variation="primary"
              size="medium"
              paddingLeftRight="10px"
              // onClick={() => handleEdit(week)}
            >
              تعديل{" "}
            </Button>
          </Modal.Open>
          <Modal.Open opens="delete-announcement">
            <Button
              variation="danger"
              size="medium"
              paddingLeftRight="10px"
              // onClick={() => handleDelete(week)}
            >
              حذف{" "}
            </Button>
          </Modal.Open>

          <Modal.Window name="edit-announcement">
            <AnnouncementEditWindow
              selectedAnnouncement={postInformation}
              onCloseModal
            />
          </Modal.Window>
          <Modal.Window name="delete-announcement">
            <AnnouncementDeleteWindow id={id} onConfirm={() => mutate(id)} onCloseModal />
          </Modal.Window>
        </Modal>
      </Div>
    </PostBody>
  );
}

export default PostManagement;
