import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { GoDotFill } from "react-icons/go";
import styled from "styled-components";

const Container = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  text-align: center;
  margin-top: 0.8rem;
  color: black;
  font-size: 1.6rem!important;;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Icon = styled(GoDotFill)`
  font-size: 2rem!important;;
  fill: #30bd58;
`;

function ProgressChart({ totalPercentage = 0 }) {
  const percentage = Math.min(100, Math.max(0, totalPercentage)); 

  return (
    <Container aria-label={`Progress: ${percentage}%`}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: "1.8rem",
          pathColor: "#30bd58",
          textColor: "#000",
          trailColor: "#e0e0e0",
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
