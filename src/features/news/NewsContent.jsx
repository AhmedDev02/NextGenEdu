import styled from "styled-components";
import ListFilter from "../../ui/ListFilter";
import Post from "./Post";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

function NewsContent() {
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
      <ListFilter
        items={[
          { label: "All Subjects", value: "all" },
          { label: "Database", value: "database" },
          { label: "Control", value: "control" },
          { label: "Measurements", value: "measurement" },
          { label: "Fiber", value: "fiber" },
          { label: "Neural Network", value: "neural_network" },
        ]}
        param="subjects"
        defaultItem="all"
        multipleChoose={true}
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

export default NewsContent;
