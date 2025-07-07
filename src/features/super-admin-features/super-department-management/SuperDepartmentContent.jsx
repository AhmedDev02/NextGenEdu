import { IoBookOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PiStudent } from "react-icons/pi";

import SuperCard from "../../../ui/amr/superAdmin/SuperCard";
import useGetDepartments from "./useGetDepartments";
import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";

const Container = styled.div`
  width: 100%;
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
    grid-template-columns: 1fr;
  }
`;

const AddDepartmentCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #fff;
  border: 2px dashed #10b981;
  color: #10b981;
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-height: 300px;
  font-size: 1.1rem;
  font-weight: 600;

  &:focus {
    outline: 2px solid #10b981;
    outline-offset: 4px;
  }

  &:hover,
  &:focus {
    background-color: #f0fdf4;
    border-style: solid;
    color: #065f46;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }

  & svg {
    font-size: 5rem;
    font-weight: 300;
  }
`;

const Buttons = [
  {
    label: "عرض المناهج الدراسية",
    logo: <IoBookOutline size={20} />,
    state: "page no id",
    path: "/super-admin/materials",
    variation: "primary",
    size: "medium",
  },
  {
    label: "عرض الطلبة المسجلين",
    logo: <PiStudent size={20} />,
    state: "page no id",
    path: "/super-admin/students",
    variation: "primary",
    size: "medium",
  },
  {
    label: "تعديل قسم",
    logo: <CiEdit size={20} />,
    state: "page with id",
    path: "edit-department",
    variation: "primary",
    size: "medium",
  },
];

const SuperDepartmentContent = () => {
  const { data: departments, isPending, error, refetch } = useGetDepartments();
  const navigate = useNavigate();

  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack
        message={error.message || "خطأ في عرض الاقسام"}
        onRetry={refetch}
      />
    );
  }
  if (!departments || departments.data.length === 0) {
    return (
      <Container>
        <AddDepartmentCard onClick={() => navigate("add-department")}>
          <FaPlus />
        </AddDepartmentCard>
      </Container>
    );
  }

  return (
    <Container>
      {departments.data.map((department) => (
        <SuperCard key={department.id} data={department} Buttons={Buttons} />
      ))}
      <AddDepartmentCard onClick={() => navigate("add-department")}>
        <FaPlus />
      </AddDepartmentCard>
    </Container>
  );
};

export default SuperDepartmentContent;
