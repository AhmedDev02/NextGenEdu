import styled from "styled-components";
import PostHeaderManagement from "./PostHeaderManagement";
import PostMessageManagement from "./PostMessageManagement";
import PostFooterManagement from "./PostFooterManagement";
import Modal from "../../../ui/amr/Modal";
import AnnouncementEditWindow from "./AnnouncementEditWindow";
import AnnouncementDeleteWindow from "./AnnouncementDeleteWindow";
import { useDeleteAnnouncement } from "./useDeleteAnnouncement";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 80rem;
  background-color: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-primary);

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-grey-100, #f3f4f6);
`;

const IconContainer = styled.button`
  background: var(--color-grey-200);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  &:focus,
  &:active {
    outline: none;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const StyledEdit = styled(FaRegEdit)`
  font-size: 2rem;
  color: var(--color-grey-700);
`;
const StyledDelete = styled(AiOutlineDelete)`
  font-size: 2rem;
  color: var(--color-red-700);
`;

function PostManagement({ notice = null, postInformation }) {
  const { id, title, body, date, department, course, user } = postInformation;
  const { mutate, isPending } = useDeleteAnnouncement();

  return (
    <PostBody>
      <PostHeaderManagement
        headerInfo={{
          ...user,
          date: date,
          subject: course.name,
          department: department.name,
        }}
      />
      <PostMessageManagement title={title} msg={body} notice={notice} />
      <PostFooterManagement footerInfo={user} />
      <ActionsContainer>
        <Modal>
          <Modal.Open opens="edit-announcement">
            <IconContainer title="تعديل المنشور">
              <StyledEdit />
            </IconContainer>
          </Modal.Open>
          <Modal.Open opens="delete-announcement">
            <IconContainer title="حذف المنشور">
              <StyledDelete />
            </IconContainer>
          </Modal.Open>
          <Modal.Window name="edit-announcement">
            <AnnouncementEditWindow selectedAnnouncement={postInformation} />
          </Modal.Window>
          <Modal.Window name="delete-announcement">
            <AnnouncementDeleteWindow
              isDeleting={isPending}
              id={id}
              onConfirm={() => mutate(id)}
            />
          </Modal.Window>
        </Modal>
      </ActionsContainer>
    </PostBody>
  );
}

export default PostManagement;
