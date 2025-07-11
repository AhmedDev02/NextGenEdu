import styled from "styled-components";
import AttendanceChart from "./AttendanceChart";

import ResultChart from "./ResultChart";
import TeacherMaterial from "./TeacherMaterial";

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  }

  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;

const AttendanceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const QuizContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextDivider = styled.div`
  display: block;
  margin: 30px 0;
`;
const Text = styled.h4`
  text-align: center;
`;

function DashboardContent() {
  return (
    <Div>
      <TeacherMaterial />
      {/* <TextDivider>
        <Text>
          📊 تتبع نسبة حضور الطلاب في المحاضرات والسكاشن لمعرفة مدى التزامهم
          بالحضور.
        </Text>
      </TextDivider>
      <AttendanceContainer>
        <AttendanceChart />
      </AttendanceContainer>
      <TextDivider>
        <Text>
          📈 احصل على نظرة شاملة حول أداء الطلاب في الكويزات، الأسايمنتات،
          الميدتيرم، والفاينل من خلال إحصائيات دقيقة.
        </Text>
      </TextDivider>
      <QuizContainer>
        <ResultChart />
      </QuizContainer> */}
    </Div>
  );
}

export default DashboardContent;
