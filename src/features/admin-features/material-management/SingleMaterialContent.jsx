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
  gap: 3rem;

  @media (max-width: 900px) {
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
    padding: 0.7rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

const IconContainer = styled.div`
  color: white;
  width: 7rem;
  height: 7rem;
  background: var(--color-primary-green);
  border-radius: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: 5rem;
    height: 5rem;
  }

  @media (max-width: 600px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const FileIcon = styled(MdOutlineTask)`
  font-size: 5rem;

  @media (max-width: 900px) {
    font-size: 3.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const TitlesContainer = styled.div``;

const Title = styled.p`
  font-weight: bold;
  font-size: 2rem !important;

  @media (max-width: 900px) {
    font-size: 1.5rem !important;
  }
  @media (max-width: 600px) {
    font-size: 1.1rem !important;
  }
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 1.6rem !important;

  @media (max-width: 900px) {
    font-size: 1.2rem !important;
  }
  @media (max-width: 600px) {
    font-size: 1rem !important;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const InsideContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.div`
  padding: 1rem;
  background: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  cursor: pointer;
  &:active {
    scale: 0.9;
  }

  @media (max-width: 900px) {
    width: 9rem;
    height: 3rem;
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    width: auto;
    min-width: 6rem;
    height: 2.5rem;
    font-size: 1rem;
    padding: 0.3rem;
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
                  <IoOpenOutline size={20} />
                </Button>
                <Button onClick={DownloadunAvailable} title="تحميل الملف">
                  <FiDownload size={20} />
                </Button>
              </InsideContainer>
              <InsideContainer>
                <Modal>
                  <Modal.Open opens="edit-task">
                    <Button title="تعديل">
                      <FaRegEdit size={20} />
                    </Button>
                  </Modal.Open>
                  <Modal.Open opens="delete-task">
                    <Button title="حذف">
                      <AiOutlineDelete size={20} />
                    </Button>
                  </Modal.Open>
                  <Modal.Window name="edit-task">
                    <EditMaterial data={item} onCloseModal />
                  </Modal.Window>
                  <Modal.Window name="delete-task">
                    <DeleteMaterial
                      courseId={courseId}
                      id={item.id}
                      onCloseModal
                    />
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
