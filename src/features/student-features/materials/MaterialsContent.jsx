import styled from "styled-components";
import Card from "../../../ui/Card";
import { useMaterials } from "./useMaterials";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";

const Div = styled.div`
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  margin: 50px;
  justify-content: center;
  gap: 7rem;
  flex-wrap: wrap;
`;
function MaterialsContent() {
  const { materials, isLoading, error } = useMaterials();
  if (isLoading) return <Spinner />;
  if (error) return toast.error("خطأ في تحميل المواد");
  return (
    <>
      <Div>

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
