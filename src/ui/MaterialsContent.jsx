import styled from "styled-components";
import ContentHeader from "../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../utils/constants";
import ListFilter from "./ListFilter";
import Card from "./Card";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  margin-right: 40px;
  gap: 10px;
`;
const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const Label = styled.label``;
function MaterialsContent() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.ENROLLED_MATERIALS.title}
        description={STUDENT_PAGES_PROPERTIES.ENROLLED_MATERIALS.description}
        button={false}
      />
      <Div>
        <FilterContainer>
          <Label>الفصول:</Label>
          <ListFilter
            items={[
              { label: "الفصل الدراسي الأول", value: "first" },
              { label: "الفصل الدراسي الثاني", value: "second" },
            ]}
            param="semester"
            defaultItem="first"
          />
        </FilterContainer>
        <CardContainer>
          <Card
            src="../../public/logo.png"
            alt="logo"
            progressCheck={true}
            percentageApi={{ percentage: "85%" }}
            cardButton="دراسة"
            subjectName={"البرمجة كائنية التوجه “OOP”"}
            doctorName={"د. أحمد المنوفي"}
          />
          <Card
            src="../../public/logo.png"
            alt="logo"
            progressCheck={true}
            percentageApi={{ percentage: "85%" }}
            cardButton="دراسة"
            subjectName={"البرمجة كائنية التوجه “OOP”"}
            doctorName={"د. أحمد المنوفي"}
          />
          <Card
            src="../../public/logo.png"
            alt="logo"
            progressCheck={true}
            percentageApi={{ percentage: "85%" }}
            cardButton="دراسة"
            subjectName={"البرمجة كائنية التوجه “OOP”"}
            doctorName={"د. أحمد المنوفي"}
          />{" "}
          <Card
            src="../../public/logo.png"
            alt="logo"
            progressCheck={true}
            percentageApi={{ percentage: "85%" }}
            cardButton="دراسة"
            subjectName={"البرمجة كائنية التوجه “OOP”"}
            doctorName={"د. أحمد المنوفي"}
          />
        </CardContainer>
      </Div>
    </>
  );
}

export default MaterialsContent;
