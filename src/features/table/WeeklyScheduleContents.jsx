import { useState } from "react";
import styled from "styled-components";
const days = [
  "كل الأيام",
  "السبت",
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
];
const schedules = [
  {
    day: "السبت",
    course: "OOP",
    time: "9:11",
    type: "محاضرة",
    teacher: "أ.د أحمد العتوفي",
    place: "مدرج 2",
    status: "تم الالغاء",
  },
  {
    day: "السبت",
    course: "OOP",
    time: "9:11",
    type: "محاضرة",
    teacher: "أ.د أحمد العتوفي",
    place: "مدرج 2",
    status: "في وقتها",
  },
  {
    day: "السبت",
    course: "OOP",
    time: "9:11",
    type: "محاضرة",
    teacher: "أ.د أحمد العتوفي",
    place: "مدرج 2",
    status: "في وقتها",
  },
  {
    day: "السبت",
    course: "OOP",
    time: "9:11",
    type: "محاضرة",
    teacher: "أ.د أحمد العتوفي",
    place: "مدرج 2",
    status: "في وقتها",
  },
  {
    day: "الأحد",
    course: "OOP",
    time: "11:12",
    type: "سكشن",
    teacher: "أ.د أحمد العتوفي",
    place: "معمل 102",
    status: "في وقتها",
  },
  {
    day: "الأحد",
    course: "OOP",
    time: "11:12",
    type: "سكشن",
    teacher: "أ.د أحمد العتوفي",
    place: "معمل 102",
    status: "في وقتها",
  },
  {
    day: "الأحد",
    course: "OOP",
    time: "11:12",
    type: "سكشن",
    teacher: "أ.د أحمد العتوفي",
    place: "معمل 102",
    status: "في وقتها",
  },
  {
    day: "الأحد",
    course: "OOP",
    time: "11:12",
    type: "سكشن",
    teacher: "أ.د أحمد العتوفي",
    place: "معمل 102",
    status: "في وقتها",
  },
  {
    day: "الإثنين",
    course: "OOP",
    time: "9:11",
    type: "محاضرة",
    teacher: "أ.د أحمد العتوفي",
    place: "مدرج 2",
    status: "إلغاء",
  },
  {
    day: "الإثنين",
    course: "OOP",
    time: "9:11",
    type: "محاضرة",
    teacher: "أ.د أحمد العتوفي",
    place: "مدرج 2",
    status: "إلغاء",
  },
  {
    day: "الإثنين",
    course: "OOP",
    time: "9:11",
    type: "محاضرة",
    teacher: "أ.د أحمد العتوفي",
    place: "مدرج 2",
    status: "إلغاء",
  },
  {
    day: "الإثنين",
    course: "OOP",
    time: "9:11",
    type: "محاضرة",
    teacher: "أ.د أحمد العتوفي",
    place: "مدرج 2",
    status: "إلغاء",
  },
  {
    day: "الثلاثاء",
    course: "OOP",
    time: "11:12",
    type: "سكشن",
    teacher: "أ.د أحمد العتوفي",
    place: "معمل 102",
    status: "في وقتها",
  },
  {
    day: "الثلاثاء",
    course: "OOP",
    time: "11:12",
    type: "سكشن",
    teacher: "أ.د أحمد العتوفي",
    place: "معمل 102",
    status: "في وقتها",
  },
  {
    day: "الثلاثاء",
    course: "OOP",
    time: "11:12",
    type: "سكشن",
    teacher: "أ.د أحمد العتوفي",
    place: "معمل 102",
    status: "في وقتها",
  },
  {
    day: "الثلاثاء",
    course: "OOP",
    time: "11:12",
    type: "سكشن",
    teacher: "أ.د أحمد العتوفي",
    place: "معمل 102",
    status: "في وقتها",
  },
  {
    day: "الأربعاء",
    course: "OOP",
    time: "9:11",
    type: "محاضرة",
    teacher: "أ.د أحمد العتوفي",
    place: "مدرج 2",
    status: "في وقتها",
  },
  {
    day: "الأربعاء",
    course: "OOP",
    time: "9:11",
    type: "محاضرة",
    teacher: "أ.د أحمد العتوفي",
    place: "مدرج 2",
    status: "في وقتها",
  },
  {
    day: "الأربعاء",
    course: "OOP",
    time: "9:11",
    type: "محاضرة",
    teacher: "أ.د أحمد العتوفي",
    place: "مدرج 2",
    status: "في وقتها",
  },
  {
    day: "الأربعاء",
    course: "OOP",
    time: "9:11",
    type: "محاضرة",
    teacher: "أ.د أحمد العتوفي",
    place: "مدرج 2",
    status: "في وقتها",
  },
  {
    day: "الخميس",
    course: "OOP",
    time: "11:12",
    type: "سكشن",
    teacher: "أ.د أحمد العتوفي",
    place: "معمل 102",
    status: "في وقتها",
  },
  {
    day: "الخميس",
    course: "OOP",
    time: "11:12",
    type: "سكشن",
    teacher: "أ.د أحمد العتوفي",
    place: "معمل 102",
    status: "في وقتها",
  },
  {
    day: "الخميس",
    course: "OOP",
    time: "11:12",
    type: "سكشن",
    teacher: "أ.د أحمد العتوفي",
    place: "معمل 102",
    status: "في وقتها",
  },
  {
    day: "الخميس",
    course: "OOP",
    time: "11:12",
    type: "سكشن",
    teacher: "أ.د أحمد العتوفي",
    place: "معمل 102",
    status: "في وقتها",
  },
];
const ScheduleContainer = styled.div`
  padding: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const FilterButton = styled.button`
  margin: 0px 0;
  font-size: 1.4rem;
  font-family: "Changa";
  border: 1px solid gray;
  outline: none;
  border-color: ${(props) => (props.active ? "#7cbd9c" : "#353434")};
  cursor: pointer;
  background: ${(props) => (props.active ? "#aeebd2" : "#eae8e8")};
  border-radius: 25px;
  color: ${(props) => (props.active ? "#009233" : "#353434")};
  opacity: 0.5;
  font-weight: bold;
  /* width: 150px; */
  height: 60px;
  &:focus {
    outline: none; /* Remove outline on focus */
  }
  padding: 5px 15px;
`;

const Table = styled.table`
  margin: 0 auto;
  width: 80%;
  border-collapse: separate; /* Use separate border model */
  border-spacing: 0 10px; /* Add spacing between cells */
`;

const TableHeader = styled.thead`
  /* box-shadow: 6px 8px 8px rgba(0, 0, 0, 0.1); */
  background: transparent;
`;
const TableHeaderCell = styled.th`
  padding: 12px 15px;
  border: 1px solid #dee2e6; // Light gray border
  border: none;
  color: #ffffff; // Dark text
  font-weight: 500; // Bold text
  font-size: 24px; // Adjust font size
`;
const CellContainer = styled.div`
  background-color: #eb3958;
  padding: 10px;
  font-size: 1.4rem;
  border-radius: 10px;
  /* box-shadow: 6px 8px 8px rgba(0, 0, 0, 0.1); */
  box-shadow: var(--shadow-primary);
`;
const TableBody = styled.tbody`
  text-align: center;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f2f2f2;
  }
`;

const TableCellDays = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  height: 50px;
  width: 150px;
  border-radius: 20px;
  background-color: #1db459;
  box-shadow: var(--shadow-primary);
`;
const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  background: white; /* Set background color to white */
  color: black; /* Set text color to black */
  height: 50px; /* Set height for cells */
  width: 150px; /* Set width for cells */
  border-radius: 5px;
  font-size: 1.3rem;
  /* display: inline; */

  /* box-shadow: var(--shadow-primary); */
`;

function WeeklyScheduleContents() {
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const filteredSchedules =
    selectedDays.length === 0 || selectedDays.includes("كل الأيام")
      ? schedules
      : schedules.filter((schedule) => selectedDays.includes(schedule.day));

  const dayCounts = filteredSchedules.reduce((acc, schedule) => {
    acc[schedule.day] = (acc[schedule.day] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <ScheduleContainer>
        <ButtonsContainer>
          {days.map((day) => (
            <FilterButton
              key={day}
              active={selectedDays.includes(day)}
              onClick={() => toggleDay(day)}
            >
              {day}
            </FilterButton>
          ))}
        </ButtonsContainer>
        <Table>
          <TableHeader>
            <TableHeaderCell>
              <CellContainer>الأيام</CellContainer>
            </TableHeaderCell>
            <TableHeaderCell>
              <CellContainer>إسم المادة</CellContainer>
            </TableHeaderCell>
            <TableHeaderCell>
              <CellContainer>الوقت</CellContainer>
            </TableHeaderCell>
            <TableHeaderCell>
              <CellContainer>النوع</CellContainer>
            </TableHeaderCell>
            <TableHeaderCell>
              <CellContainer>المعلم</CellContainer>
            </TableHeaderCell>
            <TableHeaderCell>
              <CellContainer>المكان</CellContainer>
            </TableHeaderCell>
            <TableHeaderCell>
              <CellContainer>الحالة</CellContainer>
            </TableHeaderCell>
          </TableHeader>
          <TableBody>
            {filteredSchedules.map((schedule, index) => {
              const isFirstOccurrence =
                index ===
                filteredSchedules.findIndex((s) => s.day === schedule.day);
              return (
                <TableRow key={index}>
                  {isFirstOccurrence ? (
                    <TableCellDays rowSpan={dayCounts[schedule.day]}>
                      {schedule.day}
                    </TableCellDays>
                  ) : null}

                  <TableCell>{schedule.course}</TableCell>
                  <TableCell>{schedule.time}</TableCell>
                  <TableCell>{schedule.type}</TableCell>
                  <TableCell>{schedule.teacher}</TableCell>
                  <TableCell>{schedule.place}</TableCell>
                  <TableCell>{schedule.status}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ScheduleContainer>
    </>
  );
}

export default WeeklyScheduleContents;
