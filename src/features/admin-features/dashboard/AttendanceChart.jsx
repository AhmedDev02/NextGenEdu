import styled from "styled-components";
import {
  Line,
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import DropDown from "../../../ui/tharwat/DropDown";

const data = [
  {
    name: "الأسبوع 1",
    attended: 240, // Attended
    notAttended: 60, // Not Attended
  },
  {
    name: "الأسبوع 2",
    attended: 150, // Attended
    notAttended: 150, // Not Attended
  },
  {
    name: "الأسبوع 3",
    attended: 180, // Attended
    notAttended: 120, // Not Attended
  },
  {
    name: "الأسبوع 4",
    attended: 120, // Attended
    notAttended: 180, // Not Attended
  },
  {
    name: "الأسبوع 5",
    attended: 200, // Attended
    notAttended: 100, // Not Attended
  },
  {
    name: "الأسبوع 6",
    attended: 180, // Attended
    notAttended: 120, // Not Attended
  },
  {
    name: "الأسبوع 7",
    attended: 220, // Attended
    notAttended: 80, // Not Attended
  },
  {
    name: "الأسبوع 8",
    attended: 250, // Attended
    notAttended: 50, // Not Attended
  },
  {
    name: "الأسبوع 9",
    attended: 190, // Attended
    notAttended: 110, // Not Attended
  },
  {
    name: "الأسبوع 10",
    attended: 210, // Attended
    notAttended: 90, // Not Attended
  },
  {
    name: "الأسبوع 11",
    attended: 230, // Attended
    notAttended: 70, // Not Attended
  },
  {
    name: "الأسبوع 12",
    attended: 160, // Attended
    notAttended: 140, // Not Attended
  },
  {
    name: "الأسبوع 13",
    attended: 140, // Attended
    notAttended: 160, // Not Attended
  },
  {
    name: "الأسبوع 14",
    attended: 100, // Attended
    notAttended: 200, // Not Attended
  },
  {
    name: "الأسبوع 15",
    attended: 180, // Attended
    notAttended: 120, // Not Attended
  },
];

const Div = styled.div`
  width: 90%;
  height: 500px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  padding: 20px;
  gap: 30px;
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 100%;
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const H3 = styled.h3``;
const Span = styled.span``;
const Divider = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 25px;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 80%;
    justify-content: space-between;
    padding: 0;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 80%;
  }
`;

function AttendanceChart() {
  return (
    <Div>
      <Divider>
        <Header>
          <H3>نسبة حضور الطلاب 📊</H3>
          <Span>عرض وتحليل سجل حضور وغياب الطلاب</Span>
        </Header>
        <DropDown
          placeholder={"اختر المادة المخصصة"}
          items={[
            { name: "مادة ال OOP", value: "oop" },
            { name: "مادة الكنترول", value: "control" },
            { name: "مادة البرمجة", value: "programming" },
          ]}
        />
      </Divider>

      <ResponsiveContainer width={"100%"} height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" tick={{ stroke: "#000", strokeWidth: 0.5 }} />
          <YAxis
            dataKey={"عدد الطلاب"}
            type="number"
            domain={[0, 300]}
            padding={{ bottom: 10 }}
            tick={{
              stroke: "#000",
              strokeWidth: 0.5,
            }}
            tickMargin={30} // Adjust the margin between the ticks and the axis
            ticks={Array.from({ length: 21 }, (_, i) => i * 15)} // Generate ticks with a step of 15
            label={{
              value: "عدد الطلاب", // The label text
              stroke: "#000",
              strokeWidth: 0.5,

              position: "top", // Position the label to the left of the axis
              offset: 20, // Add some space between the label and the axis
            }}
          >
            <Label dataKey=""></Label>
          </YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} align="right" />
          <Line
            name="الحضور"
            type="monotone"
            dataKey="attended"
            stroke="var(--color-green)"
            strokeWidth={2}
          />
          <Line
            name="الغياب"
            type="monotone"
            dataKey="notAttended"
            stroke="var(--color-red)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Div>
  );
}

export default AttendanceChart;
