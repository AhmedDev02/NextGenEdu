import { BsDoorOpen } from "react-icons/bs";
import {
  FaBook,
  FaChalkboardTeacher,
  FaSitemap,
  FaUserGraduate,
} from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import styled from "styled-components";

const StatCard = styled.div`
  background-color: #fff;
  color: #000;
  border-radius: 12px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 4px solid ${(props) => props.borderColor || "#4f46e5"};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
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
  color: #7b7b7b;
`;

const CardValue = styled.p`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: right;
  margin: 1.5rem 0;
  color: #000;
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

const statsData = [
  {
    key: "buildings",
    title: "عدد الأقسام",
    icon: <FaSitemap size={24} />,
    color: "#3b82f6",
    path: "/super-admin/departments",
  },
  {
    key: "courses",
    title: "هيئة التدريس",
    icon: <FaChalkboardTeacher size={24} />,
    color: "#8b5cf6",
    path: "/super-admin/teachers",
  },
  {
    key: "departments",
    title: "عدد المواد الدراسية",
    icon: <FaBook size={24} />,
    color: "#10b981",
    path: "/super-admin/materials",
  },
  {
    key: "halls",
    title: "عدد الطلاب المسجلين",
    icon: <FaUserGraduate size={24} />,
    color: "#f59e0b",
    path: "/super-admin/students",
  },
  {
    key: "students",
    title: "عدد المباني",
    icon: <LuBuilding2 size={24} />,
    color: "#f50b0b",
    path: "/super-admin/buildings",
  },
  {
    key: "teachers",
    title: "عدد القاعات",
    icon: <BsDoorOpen size={24} />,
    color: "#0be9f5",
    path: "/super-admin/halls",
  },
];
