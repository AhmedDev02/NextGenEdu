import styled from "styled-components";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";
import { useReadTableTeacher } from "./useReadTableTeacher";
import Spinner from "../../../ui/amr/Spinner";
import TableRow from "./TableRow";
import ErrorFallback from "../../../ui/amr/ErrorFallBack";
import Empty from "../../../ui/amr/Empty";

const TableContainer = styled.div`
  margin: 0 auto;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 3rem;
`;

const TableHeader = styled.div`
  border-radius: 1.5rem;
  width: 100%;
  height: auto;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
    padding: 0.8rem;
  }
`;

const TableHeaderCell = styled.div`
  background-color: #eb3958;
  padding: 10px;
  border-radius: 1.5rem;
  box-shadow: var(--shadow-primary);
  min-width: 8rem;
  color: white;
  font-family: "Changa";
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-danger-red);
  text-align: center;
  height: 5rem;

  @media (max-width: 768px) {
    padding: 8px;
    min-width: 6rem;
    font-size: 1rem;
    height: auto;
  }
`;

const P = styled.p`
  font-size: clamp(1.4rem, 2vw, 2rem);
  font-weight: 500;
  text-align: center;
  margin: 0.5rem 0;
`;
const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;
const DayHeaderRow = styled.div`
  background-color: #30bd58;
  border-radius: 1.5rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  font-family: "Changa";
`;

const DayHeaderText = styled.p`
  margin: 0;
  font-size: clamp(1.4rem, 2vw, 2rem);
  font-weight: 500;
`;
const Div = styled.div`
  margin-bottom: 3rem;
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
      <ErrorFallback message="خطأ في تحميل الجدول الدراسي" onRetry={refetch} />
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
          ...daySessions.map((session) => ({
            ...session,
            day: arabicDay,
          }))
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
        <TableHeaderCell>
          <P>أسم المادة</P>
        </TableHeaderCell>
        <TableHeaderCell>
          <P>من الساعة</P>
        </TableHeaderCell>
        <TableHeaderCell>
          <P>حتي الساعة</P>
        </TableHeaderCell>
        <TableHeaderCell>
          <P>النوع</P>
        </TableHeaderCell>
        <TableHeaderCell>
          <P>المكان</P>
        </TableHeaderCell>
        <TableHeaderCell>
          <P>الحالة</P>
        </TableHeaderCell>
      </TableHeader>

      <TableBody>
        {orderedDays.map((day) => (
          <Div key={day}>
            <DayHeaderRow>
              <DayHeaderText>{day}</DayHeaderText>
            </DayHeaderRow>
            {groupedSessions[day].map((session) => (
              <TableRow key={session.id} data={session} />
            ))}
          </Div>
        ))}
      </TableBody>
    </TableContainer>
  );
}

export default TeacherTable;
