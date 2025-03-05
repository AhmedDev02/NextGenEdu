import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { GoDotFill } from "react-icons/go";
import styled from "styled-components";

const Container = styled.div`
  width: 10rem;
  height: 10rem;
`;
const Text = styled.div`
  text-align: center;
  margin-top: 1rem;
  color: black;
  font-size: 1.6rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled(GoDotFill)`
  font-size: 2rem;
  fill: #30bd58;
`;

function ProgressChart({ totalPercentage }) {
  const percentage = totalPercentage;
  return (
    <Container>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: "2rem",
          pathColor: "#30bd58",
          textColor: "#000",
          trailColor: "#e0e0e0",
          backgroundColor: "#ffffff",
        })}
      />
      <Content>
        <Icon />
        <Text>النسبة المئوية</Text>
      </Content>
    </Container>
  );
}

export default ProgressChart;
