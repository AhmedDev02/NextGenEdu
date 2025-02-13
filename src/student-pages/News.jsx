import styled from "styled-components";
import ContentHeader from "../ui/ContentHeader";
import Post from "../ui/Post";
import { STUDENT_PAGES_PROPERTIES } from "../utils/constants";
import FilterMenu from "../ui/ListFilter";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

function News() {
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
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.NEWS.title}
        description={STUDENT_PAGES_PROPERTIES.NEWS.description}
        button={false}
      />
      <FilterMenu
        items={[
          { label: "All Subjects", value: "all" },
          { label: "Database", value: "database" },
          { label: "Control", value: "control" },
          { label: "Measurements", value: "measurement" },
          { label: "Fiber", value: "fiber" },
          { label: "Neural Network", value: "neural-network" },
        ]}
      />
      <Div>
        <Post postInformation={data} notice={"أي حد هيتأخر هيتنفخ"}>
          يرجى من جميع الطلاب الكرام الالتزام بحضور المحاضرة القادمة في موعدها
          المحدد، حيث سيتم اتخاذ إجراءات صارمة جدًا ضد أي طالب يتخلف عن الحضور
          بدون عذر مقبول. نعلم أن بعضكم قد يكون مشغولًا أو متعبًا، ولكن دعونا لا
          ننسى أن العلم نور، والغياب ظلام وجهل! ⚡ لذلك، نتوقع منكم جميعًا
          التواجد بكامل التركيز والجدية، وإلا فإن العواقب ستكون أشد قسوة مما
          تتخيلون!
        </Post>
        <Post postInformation={data} notice={"أي حد هيتأخر هيتنفخ"}>
          يرجى من جميع الطلاب الكرام الالتزام بحضور المحاضرة القادمة في موعدها
          المحدد، حيث سيتم اتخاذ إجراءات صارمة جدًا ضد أي طالب يتخلف عن الحضور
          بدون عذر مقبول. نعلم أن بعضكم قد يكون مشغولًا أو متعبًا، ولكن دعونا لا
          ننسى أن العلم نور، والغياب ظلام وجهل! ⚡ لذلك، نتوقع منكم جميعًا
          التواجد بكامل التركيز والجدية، وإلا فإن العواقب ستكون أشد قسوة مما
          تتخيلون!
        </Post>
        <Post postInformation={data} notice={"أي حد هيتأخر هيتنفخ"}>
          يرجى من جميع الطلاب الكرام الالتزام بحضور المحاضرة القادمة في موعدها
          المحدد، حيث سيتم اتخاذ إجراءات صارمة جدًا ضد أي طالب يتخلف عن الحضور
          بدون عذر مقبول. نعلم أن بعضكم قد يكون مشغولًا أو متعبًا، ولكن دعونا لا
          ننسى أن العلم نور، والغياب ظلام وجهل! ⚡ لذلك، نتوقع منكم جميعًا
          التواجد بكامل التركيز والجدية، وإلا فإن العواقب ستكون أشد قسوة مما
          تتخيلون!
        </Post>
      </Div>
    </>
  );
}

export default News;
