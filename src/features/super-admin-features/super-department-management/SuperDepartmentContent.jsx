import { useState, useMemo } from "react";
import { IoBookOutline, IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PiStudent } from "react-icons/pi";

import SuperCard from "../../../ui/amr/superAdmin/SuperCard";
import useGetDepartments from "./useGetDepartments";
import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import { ActionButton } from "../super-students-management/SharedStyles";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
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

// --- ✨ Improved Search Styles ---
const SearchContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 12px -1px rgb(0 0 0 / 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const SearchInputContainer = styled.div`
  position: relative;
  flex-grow: 1;
  min-width: 250px;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  padding: 0.75rem 4rem 0.75rem 2.5rem;
  transition: all 0.2s ease;
  font-size: 1rem;
  max-width: 700px;

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px #dcfce7;
  }
`;

const StyledSearchIcon = styled(IoSearch)`
  position: absolute;
  top: 50%;
  right: 0.85rem;
  transform: translateY(-50%);
  color: #9ca3af;
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem;
  color: #6b7280;
`;

const Buttons = [
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
  const [searchQuery, setSearchQuery] = useState("");
  const { data: departments, isPending, error, refetch } = useGetDepartments();
  const navigate = useNavigate();

  const filteredDepartments = useMemo(() => {
    if (!departments?.data) return [];
    if (!searchQuery) return departments.data;

    return departments.data.filter((department) =>
      department.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [departments, searchQuery]);

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
        <ActionButton
          onClick={() => navigate("add-department")}
          bgColor="#0d825b"
        >
          <FaPlus />
          <span>إضافة قسم</span>
        </ActionButton>
      </Container>
    );
  }

  return (
    <MainContainer>
      <SearchContainer>
        <SearchInputContainer>
          <SearchInput
            placeholder="ابحث عن قسم..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <StyledSearchIcon size={20} />
        </SearchInputContainer>
        <ActionButton
          onClick={() => navigate("add-department")}
          bgColor="#0d825b"
        >
          <FaPlus />
          <span>إضافة قسم</span>
        </ActionButton>
      </SearchContainer>
      <Container>
        {filteredDepartments.length > 0 ? (
          filteredDepartments.map((department) => (
            <SuperCard
              key={department.id}
              data={department}
              Buttons={Buttons}
            />
          ))
        ) : (
          <EmptyState>
            <h3>لا توجد أقسام تطابق بحثك.</h3>
            <p>حاول استخدام كلمات بحث مختلفة.</p>
          </EmptyState>
        )}
        <AddDepartmentCard onClick={() => navigate("add-department")}>
          <FaPlus />
        </AddDepartmentCard>
      </Container>
    </MainContainer>
  );
};

export default SuperDepartmentContent;
