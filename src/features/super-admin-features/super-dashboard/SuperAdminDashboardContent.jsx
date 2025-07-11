import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  FaSitemap,
  FaChalkboardTeacher,
  FaBook,
  FaUserGraduate,
} from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { BsDoorOpen } from "react-icons/bs";
// --- Recharts Imports ---
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import useGetDashboardStats from "./useGetDashboardStats";
import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import Empty from "../../../ui/amr/Empty";

// --- Styled Components ---

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DashboardContainer = styled.div`
  padding: 2.5rem;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StatsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const StatCard = styled.div`
  flex-basis: 320px;
  background-color: #fff;
  border-radius: 12px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 4px solid ${(props) => props.borderColor || "#4f46e5"};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #4b5563;
`;

const CardValue = styled.p`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: right;
  margin: 1.5rem 0;
  color: #1f2937;
`;

const CardButton = styled.button`
  background-color: #6627db;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 0;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4c1da4;
  }
`;

const StatsSection = styled.section`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.07);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  text-align: right;
  font-size: 1.5rem;
  color: #374151;
  margin-bottom: 2rem;
`;

// --- New Styled Components for Advanced Charts ---
const AdvancedChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ChartWrapper = styled.div`
  h3 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #4b5563;
  }
`;

// --- Main Component ---

function SuperAdminDashboardContent() {
  const navigate = useNavigate();
  const { data, isPending, error, refetch } = useGetDashboardStats();

  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack
        message={error.message || "حدث خطأ اثناء عرض البيانات"}
        onRetry={refetch}
      />
    );
  }
  if (!data?.data) {
    return <Empty resourceName="معلومات" />;
  }

  const cardTemplates = [
    {
      key: "departments",
      title: "الأقسام",
      icon: <FaSitemap size={24} color="#3b82f6" />,
      color: "#3b82f6",
      path: "/super-admin/departments",
    },
    {
      key: "teachers",
      title: "هيئة التدريس",
      icon: <FaChalkboardTeacher size={24} color="#8b5cf6" />,
      color: "#8b5cf6",
      path: "/super-admin/teachers",
    },
    {
      key: "courses",
      title: "المواد",
      icon: <FaBook size={24} color="#10b981" />,
      color: "#10b981",
      path: "/super-admin/materials",
    },
    {
      key: "students",
      title: "الطلاب",
      icon: <FaUserGraduate size={24} color="#f59e0b" />,
      color: "#f59e0b",
      path: "/super-admin/students",
    },
    {
      key: "buildings",
      title: "المباني",
      icon: <LuBuilding2 size={24} color="#ef4444" />,
      color: "#ef4444",
      path: "/super-admin/buildings",
    },
    {
      key: "halls",
      title: "القاعات",
      icon: <BsDoorOpen size={24} color="#3bace2" />,
      color: "#3bace2",
      path: "/super-admin/halls",
    },
  ];

  const finalStatsData = cardTemplates.map((template) => ({
    ...template,
    value: data.data[template.key] || 0,
  }));

  // --- Data for new charts ---
  const stats = data.data;
  const pieData = [
    { name: "الطلاب", value: stats.students || 0 },
    { name: "هيئة التدريس", value: stats.teachers || 0 },
  ];
  const PIE_COLORS = ["#f59e0b", "#8b5cf6"];

  const averagesData = [
    {
      name: "متوسط لكل قسم",
      الطلاب:
        stats.departments > 0
          ? (stats.students / stats.departments).toFixed(1)
          : 0,
      المدرسين:
        stats.departments > 0
          ? (stats.teachers / stats.departments).toFixed(1)
          : 0,
      المواد:
        stats.departments > 0
          ? (stats.courses / stats.departments).toFixed(1)
          : 0,
    },
  ];

  return (
    <DashboardContainer>
      <StatsGrid>
        {finalStatsData.map((stat) => (
          <StatCard key={stat.key} borderColor={stat.color}>
            <div>
              <CardHeader>
                <CardTitle>{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardValue>{stat.value}</CardValue>
            </div>
            <CardButton onClick={() => navigate(stat.path)}>عرض</CardButton>
          </StatCard>
        ))}
      </StatsGrid>

      <StatsSection>
        <SectionTitle>ملخص الإحصائيات العامة</SectionTitle>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={finalStatsData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="title" tick={{ fill: "#4b5563" }} />
            <YAxis allowDecimals={false} tick={{ fill: "#4b5563" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="value" name="العدد" fill="#6627db" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </StatsSection>

      <StatsSection>
        <SectionTitle>تحليل العلاقات والمعدلات</SectionTitle>
        <AdvancedChartsGrid>
          <ChartWrapper>
            <h3>نسبة الطلاب إلى هيئة التدريس</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartWrapper>
          <ChartWrapper>
            <h3>متوسطات لكل قسم</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={averagesData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" tick={{ fill: "#4b5563" }} />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: "#4b5563" }}
                  width={120}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="الطلاب" fill="#f59e0b" barSize={20} />
                <Bar dataKey="المدرسين" fill="#8b5cf6" barSize={20} />
                <Bar dataKey="المواد" fill="#10b981" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </AdvancedChartsGrid>
      </StatsSection>
    </DashboardContainer>
  );
}

export default SuperAdminDashboardContent;
