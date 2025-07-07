import styled from "styled-components";
import Spinner from "../../../ui/amr/Spinner";
import useGetSemesters from "../../../features/super-admin-features/super-material-management/useGetSemesters";

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

  background-color: ${({ isActive }) =>
    isActive ? "var(--color-primary-green)" : "#f3f4f6"};
  color: ${({ isActive }) => (isActive ? "white" : "#4b5563")};
  border-color: ${({ isActive }) =>
    isActive ? "var(--color-primary-green)" : "#e5e7eb"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const SemesterFilter = ({ selectedSemester, onSelectSemester }) => {
  const { data: semesters, isPending } = useGetSemesters();

  if (isPending) return <Spinner />;

  return (
    <FilterGroup>
      {semesters?.data.map((semester) => (
        <FilterButton
          key={semester.id}
          isActive={selectedSemester === semester.id}
          onClick={() => onSelectSemester(semester.id)}
        >
          {`${semester.name} - ${
            semester.term === 1 ? "الفصل الدراسي الاول" : "الفصل الدراسي الثاني"
          }`}
        </FilterButton>
      ))}
    </FilterGroup>
  );
};

export default SemesterFilter;
