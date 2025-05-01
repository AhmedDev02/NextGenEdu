import styled from "styled-components";
import { useState } from "react";

import { HiChevronDown, HiChevronLeft } from "react-icons/hi";
import Button from "../../../ui/Button";
import { FiDownload, FiExternalLink, FiPlay } from "react-icons/fi";
import { AiFillFileText, AiFillPlayCircle } from "react-icons/ai";
import ListFilter from "../../../ui/ListFilter";
import { useParams } from "react-router-dom";
import { useCourseMaterial } from "./useCourseMaterial";
import Modal from "../../../ui/amr/Modal";
import CourseMaterialForm from "./CourseMaterialForm";

const categories = [
  { label: "Videos", value: "videos" },
  { label: "Section", value: "section" }, // Check if this is the correct label
  { label: "Lecture", value: "lecture" },
  { label: "All", value: "all" },
];

const Div = styled.div`
  display: flex;
  margin-left: ${({ open }) => (open ? "" : "auto")};
  margin-right: ${({ open }) => (open ? "" : "80px")};
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;
const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  height: ${({ open }) => (open ? "auto" : "40px")};
  justify-self: ${({ open }) => (open ? "" : "start")};
  overflow-y: hidden;
  @media (max-width: 768px) {
    height: ${({ open }) => (open ? "auto" : "30px")};
    max-width: 100%;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
    height: ${({ open }) => (open ? "auto" : "30px")};

    max-width: 100%;
  }
`;
const WeekTitle = styled.div`
  display: flex;
  font-size: 2.5rem;
  align-self: start;
  justify-self: start;
  text-align: start;
  cursor: pointer;
  margin-left: auto;
`;
const Row = styled.div`
  display: flex;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  /* min-width: ${(open) => (open ? "" : "1000px")}; */
`;
const H1 = styled.h1`
  font-size: 2rem;
  margin-left: auto;
`;
const Span = styled.span`
  color: #fff;
  display: flex;
  gap: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 1.6rem;
`;
const WeekDetail = styled.div`
  display: flex;
  background: #fff;
  width: 700px;
  margin-left: 20px;
  padding: 10px;
  border-radius: 16px;
`;
const LectureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 20px;
  align-items: start;
`;
const H3 = styled.h3`
  font-size: 1.4rem;
`;
const H4 = styled.h4`
  font-size: 1.3rem;
`;
const P = styled.p`
  display: block;
  margin-right: auto;
`;

const Complete = styled.span`
  margin: auto 0;
  background: ${({ status }) => (status ? " var(--color-primary-green);" : "")};
  color: ${({ status }) => (status ? " #fff;" : "")};
  border: ${({ status }) =>
    status ? "2px green solid" : "2px var(--color-secondary-darkblue) solid"};

  display: block;
  font-weight: 800;
  margin-right: auto;
  margin-left: 20px;
  text-align: center;
  padding: 10px;
  border-radius: 20px;
  font-size: 1.3rem;
  justify-content: center;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border-radius: 10px;
  color: #fff;
  background: var(--color-danger-red);
  align-self: center;
`;
const DivContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
`;
const ButtonDiv = styled.div``;
function CurriculumContent() {
  const { curriculumId } = useParams();
  let { courseMaterial: material } = useCourseMaterial(curriculumId);
  material = material.data;
  console.log(material);

  const [openWeek, setOpenWeek] = useState([]);

  function handleDetails(weekId, event) {
    event.stopPropagation();

    // setOpenWeek((prev) => (prev === weekId ? null : weekId)); // Toggle visibility
    if (openWeek.includes(weekId)) {
      // Remove weekId to close it
      setOpenWeek(openWeek.filter((id) => +id !== +weekId));
      console.log(openWeek);
    } else {
      // Add weekId so it remains open along with any others
      setOpenWeek([...openWeek, weekId]);
      console.log(openWeek);
    }
  }

  // if (material.length == 0) return <h2>empty...</h2>;

  return (
    <Div open={openWeek}>
      <DivContainer>
        <ListFilter
          items={categories}
          param={"filter"}
          defaultItem="all"
          multipleChoose={true}
          containerStyles={{ margin: "0  auto 20px auto" }}
        />

        {material?.map((week) => {
          return (
            <Container
              open={openWeek.includes(week.id)}
              key={week.week + week.id}
            >
              <WeekTitle
                key={week.id}
                onClick={(event) => handleDetails(week.id, event)}
              >
                {openWeek.includes(week.id) ? (
                  <HiChevronDown />
                ) : (
                  <HiChevronLeft />
                )}

                <H1>{"الأسبوع" + " " + week.week}</H1>
              </WeekTitle>
              {/* here was a loop for all weeks */}
              <Row key={week.id + week.week}>
                <WeekDetail open={openWeek}>
                  <Icon>
                    {week.type === "other" ? (
                      <AiFillPlayCircle />
                    ) : (
                      <AiFillFileText />
                    )}
                  </Icon>
                  <LectureContainer>
                    <H4>{week.type}</H4>
                    <H3>{week.title}</H3>
                  </LectureContainer>

                  <Complete style={{ outline: "none", border: "none" }}>
                    <Modal>
                      <Modal.Open opens="edit-material">
                        <ButtonDiv>
                          <Button
                            variation="transparent"
                            size="custom"
                            paddingLeftRight="10px"
                          >
                            تعديل{" "}
                          </Button>
                        </ButtonDiv>
                      </Modal.Open>
                      <Modal.Window name="edit-material">
                        <CourseMaterialForm />
                      </Modal.Window>
                    </Modal>
                  </Complete>
                </WeekDetail>
                <ButtonsContainer>
                  <Button
                    variation="danger"
                    size="custom"
                    paddingLeftRight="37px"
                    paddingTopBottom="10px"
                    onClick={() => handleDetails(week.id)}
                    style={openWeek ? { boxShadow: "none" } : {}} // Dynamically remove shadow
                  >
                    {week.type === "file" ? (
                      <Span style={{ padding: "0 11px" }}>
                        <FiExternalLink />
                        <P>فتح</P>
                      </Span>
                    ) : (
                      <Span>
                        <FiPlay />
                        <P>تشغيل</P>
                      </Span>
                    )}
                  </Button>
                  <Button
                    variation="danger"
                    size="custom"
                    paddingLeftRight="40px"
                    paddingTopBottom="10px"
                    onClick={() => handleDetails(week.id)}
                    style={!openWeek ? { boxShadow: "none" } : {}} // Dynamically remove shadow
                  >
                    <Span>
                      <FiDownload />
                      <P>تحميل</P>
                    </Span>
                  </Button>
                </ButtonsContainer>
              </Row>
            </Container>
          );
        })}
      </DivContainer>
    </Div>
  );
}

export default CurriculumContent;
