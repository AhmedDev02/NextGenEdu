import styled from "styled-components";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Label,
  LabelList,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import ListFilter from "../../../ui/ListFilter";

const data = [
  { name: 0, students: 30 },
  { name: 1, students: 40 },
  { name: 2, students: 25 },
  { name: 3, students: 50 },
  { name: 4, students: 10 },
  { name: 5, students: 60 },
  { name: 6, students: 15 },
  { name: 7, students: 80 },
  { name: 8, students: 100 },
  { name: 9, students: 120 },
  { name: 10, students: 50 },
  { name: 11, students: 70 },
  { name: 12, students: 60 },
  { name: 13, students: 40 },
  { name: 14, students: 30 },
  { name: 15, students: 20 },
  { name: 16, students: 25 },
  { name: 17, students: 110 },
  { name: 18, students: 150 },
  { name: 19, students: 200 },
  { name: 20, students: 250 },
];

const Div = styled.div`
  display: flex;
  width: 90%;
  height: 500px;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 40px 0;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 0;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 100%;
    padding: 30px 0;
  }
`;
function ResultChart() {
  //   const totalStudents = data.reduce((acc, curr) => acc + curr.students, 0);

  const getColor = (name) => {
    if (name >= 0 && name <= 3) {
      return "#2A3248"; // Color for range 0-3
    } else if (name >= 4 && name <= 9) {
      return "var(--color-red)"; // Red color for range 4-9
    } else if (name >= 10 && name <= 15) {
      return "#FFF93D"; // Yellow color for range 10-15
    } else if (name >= 16 && name <= 20) {
      return "#34AD5D"; // Green color for range 16-20
    }
  };

  return (
    <Div>
      <ListFilter
        items={[
          { label: "كويزات", value: "quizzes" },
          { label: "أسايمنتات", value: "assignments" },
          { label: "فاينال", value: "finals" },
        ]}
        param={"type"}
        defaultItem={"quizzes"}
      />

      <ResponsiveContainer width={"100%"} height="100%">
        <BarChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name">
            <Label value="الدرجات" offset={-2} position="insideBottom" />
          </XAxis>

          <YAxis
            label={{
              value: "عدد الطلاب",
              angle: -90,
              position: "insideLeft",
            }}
            tickMargin={30} // Adjust the margin between the ticks and the axis
          />

          <Bar dataKey="students">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
            ))}
            <LabelList
              dataKey="students"
              position="top"
              style={{ stroke: "#000000b1" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Div>
  );
}

export default ResultChart;
