import styled from "styled-components";
import ListFilter from "../../../ui/ListFilter";
import Card from "../../../ui/Card";
import { useMaterials } from "./useMaterials";
import { useUser } from "../../../hooks/useUser";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";

const Div = styled.div`
  width: 100%;
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
  margin: 50px;
  justify-content: center;
  gap: 7rem;
  flex-wrap: wrap;
`;
const Label = styled.label``;
function MaterialsContent() {
  const { materials, isLoading, error } = useMaterials();
  if (isLoading) return <Spinner />;
  if (error) return toast.error("خطأ في تحميل المواد");
  return (
    <>
      <Div>
        {/* <FilterContainer>
          <Label>الفصول:</Label>
          <ListFilter
            items={[
              { label: "الفصل الدراسي الأول", value: "first" },
              { label: "الفصل الدراسي الثاني", value: "second" },
            ]}
            param="semester"
            defaultItem="first"
          />
        </FilterContainer> */}
        <CardContainer>
          {materials.data.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              src={"/logo.png"}
              alt="logo"
              cardButton={"دراســـة"}
              courseName={card.name}
              description={card.description}
              navigateTo={`/enrolled-materials/${card.id}`}
            />
          ))}
        </CardContainer>
      </Div>
    </>
  );
}

export default MaterialsContent;
