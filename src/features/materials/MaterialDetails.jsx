import styled from "styled-components";
import { useMaterial } from "./useMaterial";
import { useEffect, useState } from "react";
import { HiChevronDown, HiChevronLeft } from "react-icons/hi";
import Button from "../../ui/Button";
import { FiDownload, FiExternalLink, FiPlay } from "react-icons/fi";
import { AiFillFileText, AiFillPlayCircle } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import ListFilter from "../../ui/ListFilter";
import { useLocation } from "react-router-dom";

const categories = [
  { label: "Quiz", value: "quiz" },
  { label: "Assignment", value: "assignment" },
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
`;
const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;

  height: ${({ open }) => (open ? "auto" : "50px")};
  justify-self: ${({ open }) => (open ? "" : "start")};
  overflow-y: hidden;
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
function MaterialDetails() {
  const { material, isLoading, error } = useMaterial();
  // console.log(material);
  const [openWeek, setOpenWeek] = useState([]);
  const location = useLocation();
  const [filteredMaterials, setFilteredWeeks] = useState(material);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get("filter"); // Example: "lectures-sections-quizzes"

    if (filterParam === "all") {
      // Reset to original state when "all" is selected
      setFilteredWeeks(material);
      return;
    }

    if (filterParam) {
      const keywords = filterParam.toLowerCase().split("-");

      console.log("🔎 Filter Keywords:", keywords);

      const filteredWeeks = material.weeks.map((week) => {
        const filteredResources = week.resources.filter((resource) => {
          // Clean the title - Remove "-" and numbers
          const cleanedTitle = resource.title
            .toLowerCase()
            .replace(/[-\s]+/g, " ") // Normalize spaces and remove hyphens
            .replace(/\d+$/, "") // Remove trailing numbers
            .trim(); // Ensure no extra spaces
          // Compare with filters
          return keywords.some((keyword) => cleanedTitle.includes(keyword));
        });

        return { ...week, resources: filteredResources };
      });

      setFilteredWeeks({ ...material, weeks: filteredWeeks });
    } else {
      setFilteredWeeks(material);
    }
  }, [location.search, material]);

  function handleDetails(weekId, event) {
    event.stopPropagation();

    // setOpenWeek((prev) => (prev === weekId ? null : weekId)); // Toggle visibility
    if (openWeek.includes(weekId)) {
      // Remove weekId to close it
      setOpenWeek(openWeek.filter((id) => id !== weekId));
    } else {
      // Add weekId so it remains open along with any others
      setOpenWeek([...openWeek, weekId]);
    }
  }

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <Div></Div>;

  return (
    <Div open={openWeek}>
      <ListFilter
        items={categories}
        param={"filter"}
        defaultItem="all"
        multipleChoose={true}
        containerStyles={{ margin: "0  auto 20px auto" }}
      />
      {filteredMaterials?.weeks.map((week) => (
        <Container open={openWeek.includes(week.weekId)} key={week.weekId}>
          <WeekTitle
            key={week.weekId}
            onClick={(event) => handleDetails(week.weekId, event)}
          >
            {openWeek.includes(week.weekId) ? (
              <HiChevronDown />
            ) : (
              <HiChevronLeft />
            )}

            <H1>{week.week}</H1>
          </WeekTitle>

          {week.resources.map((weekDetail) => (
            <Row key={weekDetail.id}>
              <WeekDetail open={openWeek}>
                <Icon>
                  {weekDetail.fileType === "video" ? (
                    <AiFillPlayCircle />
                  ) : (
                    <AiFillFileText />
                  )}
                </Icon>
                <LectureContainer>
                  <H4>{weekDetail.type}</H4>
                  <H3>{weekDetail.title}</H3>
                </LectureContainer>
                <Complete status={weekDetail.status}>
                  {weekDetail.status && <FiCheck />}{" "}
                  {weekDetail.status ? "مكتمل" : "غير مكتمل"}
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
                  {weekDetail.fileType === "pdf" ? (
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
          ))}
        </Container>
      ))}
    </Div>
  );
}

export default MaterialDetails;
