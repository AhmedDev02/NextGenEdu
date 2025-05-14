import styled from "styled-components";
import ListFilter from "../../../ui/ListFilter";
import Card from "../../../ui/Card";
import { useMaterials } from "./useMaterials";
import { useUser } from "../../../hooks/useUser";

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
  const { user } = useUser();
  console.log(user);
  console.log(user.courses.data[0]);
  return (
    <>
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
          {user.courses.data.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              src={"../../../../public/logo.png"}
              alt={card.alt}
              cardButton={"دراسة"}
              subjectName={card.description}
              doctorName={card.doctorName}
              navigateTo={`/enrolled-materials/${card.id}`}
            />
          ))}
        </CardContainer>
      </Div>
    </>
  );
}

export default MaterialsContent;
