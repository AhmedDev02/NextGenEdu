import styled from "styled-components";
import ListFilter from "../../../ui/ListFilter";
import PostManagement from "./PostManagement";
import Button from "../../../ui/Button";
import { FaPlus } from "react-icons/fa";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterDiv = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media (max-width: 768px) {
    min-width: 100%;
    justify-content: end;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Divider = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
function AdminNewsContent() {
  const data = {
    src: "../public/download.jpeg",
    identity: {
      name: "أ.د. أحمد المنوفي",
      subject: "مادة ال OOP",
    },
    date: "1/11/2025",
  };
  return (
    <>
      <FilterDiv>
        <Button
          size="custom"
          style={{ marginTop: "30px" }}
          paddingTopBottom="15px"
          navigateTo={"/admin/news/add"}
        >
          <FaPlus /> خبر جديد!
        </Button>
        <Divider>
          <FilterContainer>
            <h3>إختر الفرقة</h3>
            <ListFilter
              items={[
                { label: "All levels", value: "all" },
                { label: "first", value: "first" },
                { label: "second", value: "second" },
                { label: "third", value: "third" },
                { label: "fourth", value: "fourth" },
              ]}
              param="level"
              defaultItem="first"
              multipleChoose={false}
            />
          </FilterContainer>
          <FilterContainer>
            <h3>إختر المادة</h3>
            <ListFilter
              items={[
                { label: "All Subjects", value: "all" },
                { label: "Database", value: "database" },
                { label: "Control", value: "control" },
              ]}
              param="subjects"
              defaultItem="all"
              multipleChoose={true}
            />
          </FilterContainer>
        </Divider>
      </FilterDiv>
      <Div>
        <PostManagement postInformation={data} notice={"أي حد هيتأخر هيتنفخ"}>
          يرجى من جميع الطلاب الكرام الالتزام بحضور المحاضرة القادمة في موعدها
          المحدد، حيث سيتم اتخاذ إجراءات صارمة جدًا ضد أي طالب يتخلف عن الحضور
          بدون عذر مقبول. نعلم أن بعضكم قد يكون مشغولًا أو متعبًا، ولكن دعونا لا
          ننسى أن العلم نور، والغياب ظلام وجهل! ⚡ لذلك، نتوقع منكم جميعًا
          التواجد بكامل التركيز والجدية، وإلا فإن العواقب ستكون أشد قسوة مما
          تتخيلون!
        </PostManagement>
        <PostManagement postInformation={data} notice={"أي حد هيتأخر هيتنفخ"}>
          يرجى من جميع الطلاب الكرام الالتزام بحضور المحاضرة القادمة في موعدها
          المحدد، حيث سيتم اتخاذ إجراءات صارمة جدًا ضد أي طالب يتخلف عن الحضور
          بدون عذر مقبول. نعلم أن بعضكم قد يكون مشغولًا أو متعبًا، ولكن دعونا لا
          ننسى أن العلم نور، والغياب ظلام وجهل! ⚡ لذلك، نتوقع منكم جميعًا
          التواجد بكامل التركيز والجدية، وإلا فإن العواقب ستكون أشد قسوة مما
          تتخيلون!
        </PostManagement>
        <PostManagement postInformation={data} notice={"أي حد هيتأخر هيتنفخ"}>
          يرجى من جميع الطلاب الكرام الالتزام بحضور المحاضرة القادمة في موعدها
          المحدد، حيث سيتم اتخاذ إجراءات صارمة جدًا ضد أي طالب يتخلف عن الحضور
          بدون عذر مقبول. نعلم أن بعضكم قد يكون مشغولًا أو متعبًا، ولكن دعونا لا
          ننسى أن العلم نور، والغياب ظلام وجهل! ⚡ لذلك، نتوقع منكم جميعًا
          التواجد بكامل التركيز والجدية، وإلا فإن العواقب ستكون أشد قسوة مما
          تتخيلون!
        </PostManagement>
      </Div>
    </>
  );
}

export default AdminNewsContent;
