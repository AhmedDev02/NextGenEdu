import styled from "styled-components";
import ListFilter from "../../../ui/ListFilter";
import Button from "../../../ui/Button";
import Card from "../../../ui/Card";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
function TeacherMaterial() {
  const data = [1, 2, 3];

  return (
    <>
      <FilterDiv>
        <ListFilter
          items={[
            { label: "الفرقة الأولى", value: "first" },
            { label: "الفرقة الثانية", value: "second" },
            { label: "الفرقة الثالثة", value: "third" },
            { label: "الفرقة الرابعة", value: "fourth" },
          ]}
          param={"department"}
          defaultItem={"first"}
        />
      </FilterDiv>
      <CardsContainer>
        {data.map((index) => (
          <Card
            src={"../../../../public/logo.png"}
            alt={"logo"}
            key={index}
            subjectName={"البرمجة كائنية التوجه “OOP”"}
            doctorName={"عدد الطلاب المسجلين بالمادة: 235"}
            cardStyle={{ height: "auto" }}
          >
            <Button size="custom" paddingTopBottom="5px" variation="danger">
              عرض الطلاب المسجلين
            </Button>
            <Button
              size="custom"
              paddingTopBottom="5px"
              variation="danger"
              margin=" 0 0 10px 0"
            >
              عرض المنهج الدراسي
            </Button>
          </Card>
        ))}
      </CardsContainer>
    </>
  );
}

export default TeacherMaterial;
