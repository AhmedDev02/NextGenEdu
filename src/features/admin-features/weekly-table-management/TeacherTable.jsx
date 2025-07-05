import styled from "styled-components";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";
import { useReadTableTeacher } from "./useReadTableTeacher";
import Spinner from "../../../ui/amr/Spinner";
import TableRow from "./TableRow";
import Empty from "../../../ui/amr/Empty";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";

const TableContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const TableHeader = styled.div`
  border-radius: 1rem;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    display: none;
  }
`;

const TableHeaderCell = styled.div`
  background-color: #ef4444;
  padding: 1rem;
  border-radius: 0.75rem;
  color: white;
  font-family: "Changa", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
`;

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  gap: 2rem;
`;

const DayHeaderRow = styled.div`
  background-color: #30bd58;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const DayHeaderText = styled.p`
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: "Changa", sans-serif;
`;

const DayGroup = styled.div`
  margin-bottom: 1rem;
`;

const arabicToEnglishDays = {
  الأحد: "sunday",
  الإثنين: "monday",
  الثلاثاء: "tuesday",
  الأربعاء: "wednesday",
  الخميس: "thursday",
  السبت: "saturday",
};

function TeacherTable() {
  const { selectedDays } = useStudentProgressContext();
  const { tableData, isPending, error, refetch } = useReadTableTeacher();

  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack message="خطأ في تحميل الجدول الدراسي" onRetry={refetch} />
    );
  }
  if (!tableData || tableData.data.length === 0) {
    return <Empty resourceName="معلومات" />;
  }

  const groupedSessions = {};
  tableData.data.forEach((one) => {
    Object.entries(one.sessions || {}).forEach(([dayKey, daySessions]) => {
      const arabicDay = Object.keys(arabicToEnglishDays).find(
        (key) => arabicToEnglishDays[key] === dayKey
      );

      if (
        selectedDays.length === 0 ||
        selectedDays.includes("كل الأيام") ||
        selectedDays.includes(arabicDay)
      ) {
        if (!groupedSessions[arabicDay]) {
          groupedSessions[arabicDay] = [];
        }
        groupedSessions[arabicDay].push(
          ...daySessions.map((session) => ({ ...session, day: arabicDay }))
        );
      }
    });
  });

  const orderedDays = [
    "السبت",
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
  ].filter((day) => groupedSessions[day]);

  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderCell>أسم المادة</TableHeaderCell>
        <TableHeaderCell>من الساعة</TableHeaderCell>
        <TableHeaderCell>حتي الساعة</TableHeaderCell>
        <TableHeaderCell>النوع</TableHeaderCell>
        <TableHeaderCell>المكان</TableHeaderCell>
        <TableHeaderCell>الحالة</TableHeaderCell>
      </TableHeader>

      <TableBody>
        {orderedDays.map((day) => (
          <DayGroup key={day}>
            <DayHeaderRow>
              <DayHeaderText>{day}</DayHeaderText>
            </DayHeaderRow>
            {groupedSessions[day].map((session) => (
              <TableRow key={session.id} data={session} />
            ))}
          </DayGroup>
        ))}
      </TableBody>
    </TableContainer>
  );
}

export default TeacherTable;
