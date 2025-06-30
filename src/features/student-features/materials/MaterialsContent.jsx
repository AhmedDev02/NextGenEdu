import styled from "styled-components";
import Card from "../../../ui/Card";
import { useMaterials } from "./useMaterials";
import Spinner from "../../../ui/amr/Spinner";
import ErrorFallback from "../../../ui/amr/ErrorFallBack";
import Empty from "../../../ui/amr/Empty";

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
  const { materials, isPending, error, refetch } = useMaterials();
  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallback message="خطأ في عرض المواد الدراسية" onRetry={refetch} />
    );
  }
  if (!materials || materials.data.length === 0) {
    return <Empty resourceName="معلومات" />;
  }
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
