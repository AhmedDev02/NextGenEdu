import { useParams } from "react-router-dom";
import { useMaterial } from "./useMaterial";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";
import Accordion from "../../../ui/amr/Accordion";
import styled, { css } from "styled-components";
import SingleMaterialContent from "./SingleMaterialContent";
import { useState } from "react";

const FILTERS = [
  { label: "الكل", value: "all" },
  { label: "سكشن", value: "section" },
  { label: "محاضرة", value: "lecture" },
  { label: "أخرى", value: "other" },
];

const FilterButton = styled.button`
  padding: ${({ padding }) => padding || "8px 16px"};
  border: ${({ border }) => border || "2px solid var(--color-grey-500)"};
  border-radius: ${({ borderRadius }) => borderRadius || "20px"};
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  font-family: "Changa";
  font-size: 1.4rem;
  text-align: center;
  background-color: transparent;
  color: #353434;

  &:hover {
    background-color: #e0f7e9;
  }

  ${({ active }) =>
    active &&
    `
    border: 2px solid #34ad5d;
    background-color: var(--color-active);
    color: #34ad5d;
  `}
  &:focus{
    outline:none
  }

  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}



  @media (max-width: 900px) {
    font-size: 1.1rem;
    width: 9rem;
    padding: 8px 8px;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    width: auto;
    min-width: 7rem;
    padding: 6px 10px;
    margin-bottom: 0.5rem;
  }
`;

const FilterButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 10px 0;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 600px) {
    flex-direction: row;
    gap: 0.5rem;
    width: 100%;
    /* Remove align-items: stretch and flex-direction: column */
  }
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
// const AccordionContainer = styled.div`
//   width: 80%;
// `;
const MaterialDetails = () => {
  const { materialId } = useParams();
  const [filter, setFilter] = useState("all");

  const { material, isLoading, error } = useMaterial(materialId);
  if (isLoading) return <Spinner />;
  if (error) return toast.error("حدث خطأ في تحميل المواد ");

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
      {Object.entries(groupedByWeek).map(([week, items]) => (
        <Accordion key={week} type="week" title={`الأسبوع ${week}`}>
          <SingleMaterialContent data={filterItems(items)} />
        </Accordion>
      ))}
    </MainContainer>
  );
};

export default MaterialDetails;
