import { FaRegFileVideo } from "react-icons/fa6";
import { MdOutlineTask } from "react-icons/md";
import styled from "styled-components";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { BsDownload } from "react-icons/bs";
import toast from "react-hot-toast";

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
  width: 90%;
  background-color: white;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;

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
  background: var(--color-danger-red);
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

// const VideoIcon = styled(FaRegFileVideo)`
//   font-size: 5rem;
//   @media (max-width: 900px) { font-size: 3.5rem; }
//   @media (max-width: 600px) { font-size: 2rem; }
// `;

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
  gap: 1rem;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

const Button = styled.div`
  width: 12rem;
  min-width: 7rem;
  height: 4rem;
  padding: 0.5rem;
  background: var(--color-danger-red);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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

const P = styled.p`
  color: white;
  font-size: 2rem !important;

  @media (max-width: 900px) {
    font-size: 1.2rem !important;
  }
  @media (max-width: 600px) {
    font-size: 1rem !important;
  }
`;
const SingleMaterialContent = ({ data }) => {
  const handleOpenFile = (Url) => {
    window.open(`https://${Url}`, "_blank");
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
          </MainContainer>
          <ButtonsContainer>
            <Button onClick={() => handleOpenFile(item.file)}>
              <LuSquareArrowOutUpRight size={24} stroke="white" />
              <P>فتح</P>
            </Button>
            <Button
              onClick={() => {
                toast.error("لا يمكن تحميل الملف في الوقت الحالي");
              }}
            >
              <BsDownload size={24} fill="white" />
              <P>تحميل</P>
            </Button>
          </ButtonsContainer>
        </Container>
      ))}
    </>
  );
};

// function getMaterialKind(filePath) {
//   if (!filePath) return "file";
//   const ext = filePath.split(".").pop().toLowerCase();
//   const videoExts = ["mp4", "mov", "avi", "wmv", "flv", "webm", "mkv"];
//   return videoExts.includes(ext) ? "فيديو" : "ملف";
// }

export default SingleMaterialContent;
