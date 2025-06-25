import { useState } from "react";
import styled from "styled-components";
import Accordion from "../../../ui/amr/Accordion";
import useGetMaterials from "./useGetMaterials";
import { useParams } from "react-router-dom";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";
import SingleMaterialContent from "./SingleMaterialContent";

const FILTERS = [
  { label: "الكل", value: "all" },
  { label: "سكشن", value: "section" },
  { label: "محاضرة", value: "lecture" },
  { label: "أخرى", value: "other" },
];

const FilterButton = styled.button`
  font-size: 1.4rem;
  font-family: "Changa";
  width: 12rem;
  min-width: 8rem;
  flex-grow: 1;
  border: 1px solid gray;
  outline: none;
  border-color: ${(props) => (props.active ? "#7cbd9c" : "#353434")};
  cursor: pointer;
  background: ${(props) => (props.active ? "#c9fad7" : "#eae8e8")};
  border-radius: 1.5rem;
  color: ${(props) => (props.active ? "#06722c" : "#353434")};
  font-weight: bold;
  padding: 10px 12px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
  }

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

const ShowMaterialsContent = () => {
  const [filter, setFilter] = useState("all");
  const { id } = useParams();
  const { material, isLoading, error } = useGetMaterials(id);
  if (isLoading) return <Spinner />;
  if (error)
    return toast.error("حدث خطأ أثناء تحميل المواد. يرجى المحاولة لاحقًا.");
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

export default ShowMaterialsContent;
