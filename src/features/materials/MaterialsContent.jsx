import styled from "styled-components";
import ListFilter from "../../ui/ListFilter";
import Card from "../../ui/Card";
import { useMaterials } from "./useMaterials";

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
  const { materials, isLoading, error } = useMaterials();

  if (isLoading) return <h2>Loading materials...</h2>;
  if (error) return <h2>Error fetching materials: {error.message}</h2>;
  if (!materials || materials.length === 0)
    return <h2>No materials available.</h2>;
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
          {materials.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              src={card.src}
              alt={card.alt}
              progressCheck={card.progressCheck}
              percentage={card.percentage}
              cardButton={card.cardButton}
              subjectName={card.subjectName}
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
