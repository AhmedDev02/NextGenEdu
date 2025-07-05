import { useParams, useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { useMaterial } from "./useMaterial";
import Spinner from "../../../ui/amr/Spinner";
import Accordion from "../../../ui/amr/Accordion";
import SingleMaterialContent from "./SingleMaterialContent";
import { useState } from "react";
import Empty from "../../../ui/amr/Empty";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";

const FILTERS = [
  { label: "الكل", value: "all" },
  { label: "سكشن", value: "section" },
  { label: "محاضرة", value: "lecture" },
  { label: "أخرى", value: "other" },
];

const FilterButton = styled.button`
  font-size: 1.4rem;
  font-family: "Changa", sans-serif;
  text-align: center;
  user-select: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  flex-grow: 1;
  min-width: 110px;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  color: #374151;

  ${({ active }) =>
    active &&
    `
    border-color: #10b981;
    background-color: #d1fae5;
    color: #065f46;
    font-weight: 600;
  `}

  &:focus,
  &:focus-visible {
    outline: none;
  }

  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
`;

const FilterButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 10px 0;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const MainContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 900px) {
    width: 95%;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 0.5rem;
    gap: 1.5rem;
  }
`;

const MaterialDetails = () => {
  const { materialId } = useParams();
  const [filter, setFilter] = useState("all");

  const { material, isPending, error, refetch } = useMaterial(materialId);
  if (isPending) return <Spinner />;
  if (error)
    return (
      <ErrorFallBack message="خطأ في عرض المواد الدراسية" onRetry={refetch} />
    );

  if (!material || material.data.length === 0)
    return <Empty resourceName="معلومات" />;

  const groupedByWeek = material.data.reduce((acc, item) => {
    if (!acc[item.week]) acc[item.week] = [];
    acc[item.week].push(item);
    return acc;
  }, {});

  const filterItems = (items) => {
    if (filter === "all") return items;
    if (filter === "other")
      return items.filter(
        (item) => item.type !== "lecture" && item.type !== "section"
      );
    return items.filter((item) => item.type === filter);
  };
  return (
    <MainContainer>
      <FilterButtonsContainer>
        {FILTERS.map((btn) => (
          <FilterButton
            key={btn.value}
            active={filter === btn.value}
            onClick={() => setFilter(btn.value)}
          >
            {btn.label}
          </FilterButton>
        ))}
      </FilterButtonsContainer>
      {Object.entries(groupedByWeek).map(([week, items]) => {
        const filteredItems = filterItems(items);
        if (filteredItems.length === 0) return null;

        return (
          <Accordion key={week} type="week" title={`الأسبوع ${week}`}>
            <SingleMaterialContent data={filteredItems} />
          </Accordion>
        );
      })}
    </MainContainer>
  );
};

export default MaterialDetails;
