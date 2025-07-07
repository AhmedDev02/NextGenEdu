import styled from "styled-components";
import Spinner from "../../../ui/amr/Spinner";
import useGetDepartments from "../../../features/super-admin-features/super-department-management/useGetDepartments";

const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid transparent;
&:focus{
    outline: none;
}
  background: ${({ isActive }) =>
    isActive && "var(--color-primary-green)"};
  color: ${({ isActive }) => (isActive ? "white" : "#4b5563")};
  border-color: ${({ isActive }) =>
    isActive ? "var(--color-primary-green)" : "#e5e7eb"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const DepartmentFilter = ({ selectedDepartment, onSelectDepartment }) => {
  const { data: departments, isPending } = useGetDepartments();

  if (isPending) return <Spinner />;

  const allDepartments = [
    { id: "preparatory", name: "إعدادي" },
    ...(departments?.data || []),
  ];

  return (
    <FilterGroup>
      {allDepartments.map((dept) => (
        <FilterButton
          key={dept.id}
          isActive={selectedDepartment === dept.id}
          onClick={() => onSelectDepartment(dept.id)}
        >
          {dept.name}
        </FilterButton>
      ))}
    </FilterGroup>
  );
};

export default DepartmentFilter;
