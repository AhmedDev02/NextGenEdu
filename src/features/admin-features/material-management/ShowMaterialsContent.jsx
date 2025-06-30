import { useState } from "react";
import styled, { css } from "styled-components";
import Accordion from "../../../ui/amr/Accordion";
import useGetMaterials from "./useGetMaterials";
import { useParams } from "react-router-dom";
import Spinner from "../../../ui/amr/Spinner";
import SingleMaterialContent from "./SingleMaterialContent";
import Empty from "../../../ui/amr/Empty";
import ErrorFallback from "../../../ui/amr/ErrorFallBack";

const FILTERS = [
  { label: "الكل", value: "all" },
  { label: "سكشن", value: "section" },
  { label: "محاضرة", value: "lecture" },
  { label: "أخرى", value: "other" },
];

const FilterButton = styled.button`
  font-family: "Changa";
  font-size: 1.4rem;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease-in-out;
  padding: 0.8rem 1.6rem;
  border-radius: 3rem;
  border: 2px solid var(--color-grey-500);
  background-color: #f3f4f6;
  color: #353434;

  ${({ active }) =>
    active &&
    css`
      border: 2px solid #34ad5d;
      background-color: var(--color-active, #c9fad7);
      color: #06722c;
    `}

  &:hover:not(:disabled) {
    background-color: #e0f7e9;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
  }
`;

const FilterButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 600px) {
    gap: 0.5rem;
    justify-content: center;
  }
`;

const MainContainer = styled.div`
  width: 90%;
  max-width: 100rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 95%;
    gap: 1.5rem;
  }
`;

const ShowMaterialsContent = () => {
  const [filter, setFilter] = useState("all");
  const { id } = useParams();
  const { material, isPending, error, refetch } = useGetMaterials(id);

  if (isPending) return <Spinner />;

  if (error) {
    return (
      <ErrorFallback message="خطأ في عرض المواد الدراسية" onRetry={refetch} />
    );
  }

  if (!material || material.data.length === 0) {
    return <Empty resourceName="مواد دراسية" />;
  }

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
        const filtered = filterItems(items);
        if (filtered.length === 0) return null;
        return (
          <Accordion key={week} type="week" title={`الأسبوع ${week}`}>
            <SingleMaterialContent data={filtered} />
          </Accordion>
        );
      })}
    </MainContainer>
  );
};

export default ShowMaterialsContent;
