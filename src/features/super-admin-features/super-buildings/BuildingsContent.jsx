import { useState, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { TbBuildings } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";

import useGetBuildings from "./useGetBuildings";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import Spinner from "../../../ui/amr/Spinner";
import SuperCard from "../../../ui/amr/superAdmin/SuperCard";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #1f2937;
`;

export const ActionButton = styled.button`
  background: ${(props) => props.bgColor || "#0d825b"};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(13, 130, 91, 0.2);

  &:hover {
    transform: translateY(-2px);
    background: ${(props) => props.bgColor || "#0a6847"};
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px; /* Or adjust as needed */
  margin-bottom: 2.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  padding: 0.75rem 4rem 0.75rem 2.5rem; // Left padding for icon
  transition: all 0.2s ease;
  font-size: 1rem;
  background-color: #fff;

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

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const AddBuildingCard = styled.button`
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
  min-height: 250px;
  font-size: 1.1rem;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: #f0fdf4;
    border-style: solid;
    color: #065f46;
    transform: translateY(-4px);
  }
`;

const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  flex-direction: column;
  gap: 1rem;
  color: #4b5563;
  text-align: center;
`;

const Buttons = [
  {
    label: "عرض تفاصيل المبني",
    logo: <TbBuildings size={20} />,
    state: "page with id",
    path: "/super-admin/buildings/details",
    variation: "primary",
    size: "medium",
  },
  {
    label: "تعديل تفاصيل المبني",
    logo: <TbBuildings size={20} />,
    state: "page with id",
    path: "/super-admin/buildings/update-building",
    variation: "primary",
    size: "medium",
  },
];

const BuildingsContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: buildings, isPending, error, refetch } = useGetBuildings();
  const navigate = useNavigate();

  const filteredBuildings = useMemo(() => {
    if (!buildings?.data) return [];
    if (!searchQuery) return buildings.data;

    return buildings.data.filter((building) =>
      building.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [buildings, searchQuery]);

  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack
        message={error.message || "خطأ في عرض المباني"}
        onRetry={refetch}
      />
    );
  }

  if (!buildings || buildings.data.length === 0) {
    return (
      <EmptyStateContainer>
        <h3>لم يتم إضافة أي مباني بعد.</h3>
        <ActionButton onClick={() => navigate("add-building")}>
          <FaPlus />
          <span>إضافة أول مبنى</span>
        </ActionButton>
      </EmptyStateContainer>
    );
  }

  return (
    <PageContainer>
      <Header>
        <Title>المباني</Title>
        <ActionButton onClick={() => navigate("add-building")}>
          <FaPlus />
          <span>إضافة مبنى</span>
        </ActionButton>
      </Header>

      <SearchContainer>
        <StyledSearchIcon size={20} />
        <SearchInput
          placeholder="ابحث عن مبنى..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchContainer>

      <GridContainer>
        {filteredBuildings.length > 0 ? (
          filteredBuildings.map((building) => (
            <SuperCard key={building.id} data={building} Buttons={Buttons} />
          ))
        ) : (
          <EmptyStateContainer style={{ gridColumn: "1 / -1" }}>
            <h3>لا توجد مباني تطابق بحثك.</h3>
          </EmptyStateContainer>
        )}
        <AddBuildingCard onClick={() => navigate("add-building")}>
          <FaPlus size={60} />
        </AddBuildingCard>
      </GridContainer>
    </PageContainer>
  );
};

export default BuildingsContent;
