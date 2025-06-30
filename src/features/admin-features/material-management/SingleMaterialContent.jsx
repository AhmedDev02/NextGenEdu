import { MdOutlineTask } from "react-icons/md";
import styled from "styled-components";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { IoOpenOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Modal from "../../../ui/amr/Modal";
import DeleteMaterial from "./DeleteMaterial";
import { useParams } from "react-router-dom";
import EditMaterial from "./EditMaterial";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
`;

const MainContainer = styled.div`
  flex-grow: 1;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  overflow: hidden;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

const IconContainer = styled.div`
  color: white;
  width: 5rem;
  height: 5rem;
  background: var(--color-primary-green);
  border-radius: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
`;

const FileIcon = styled(MdOutlineTask)`
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow: hidden;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  margin: 0;
  color: var(--color-grey-500);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const InsideContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem;
  background: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  cursor: pointer;
  border: none;
  transition: all 0.2s;

  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: var(--color-grey-300);
  }

  svg {
    font-size: 2rem;
    color: var(--color-grey-700);
  }
  @media (max-width: 600px) {
    padding: 0.6rem;
    svg {
      font-size: 1.2rem;
    }
  }
`;

const SingleMaterialContent = ({ data }) => {
  const { id: courseId } = useParams();

  const handleOpenFile = (Url) => {
    window.open(`https://${Url}`, "_blank");
  };

  const DownloadunAvailable = () => {
    toast.error("هذه الميزة غير متاحة حاليا");
  };

  return (
    <>
      {data.map((item, idx) => (
        <Container key={idx}>
          <MainContainer>
            <DetailsContainer>
              <IconContainer>
                <FileIcon />
              </IconContainer>
              <TitlesContainer>
                <Title>{item.title}</Title>
                <Description>{item.type}</Description>
              </TitlesContainer>
            </DetailsContainer>
            <ButtonsContainer>
              <InsideContainer>
                <Button
                  onClick={() => handleOpenFile(item.file)}
                  title="فتح الملف"
                >
                  <IoOpenOutline />
                </Button>
                <Button onClick={DownloadunAvailable} title="تحميل الملف">
                  <FiDownload />
                </Button>
              </InsideContainer>
              <InsideContainer>
                <Modal>
                  <Modal.Open opens={`edit-task-${item.id}`}>
                    <Button title="تعديل">
                      <FaRegEdit />
                    </Button>
                  </Modal.Open>
                  <Modal.Open opens={`delete-task-${item.id}`}>
                    <Button title="حذف">
                      <AiOutlineDelete />
                    </Button>
                  </Modal.Open>

                  <Modal.Window name={`edit-task-${item.id}`}>
                    <EditMaterial data={item} />
                  </Modal.Window>
                  <Modal.Window name={`delete-task-${item.id}`}>
                    <DeleteMaterial courseId={courseId} id={item.id} />
                  </Modal.Window>
                </Modal>
              </InsideContainer>
            </ButtonsContainer>
          </MainContainer>
        </Container>
      ))}
    </>
  );
};

export default SingleMaterialContent;
