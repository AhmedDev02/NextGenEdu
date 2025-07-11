import { useState, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";
import { PiDoorDuotone } from "react-icons/pi";

import useGetHalls from "./useGetHalls";

import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import useGetBuildings from "../super-buildings/useGetBuildings";
import Spinner from "../../../ui/amr/Spinner";
import SuperCard from "../../../ui/amr/superAdmin/SuperCard";
import { CiEdit } from "react-icons/ci";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
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

const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #0d825b;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #0a6847;
    transform: translateY(-2px);
  }
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 12px;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.07);
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-grow: 1;
`;

const FilterSelect = styled.select`
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #fff;
  color: #374151;
  font-size: 1rem;
  cursor: pointer;
  min-width: 250px;
  flex-grow: 1;

  &:focus {
    outline: none;
    border-color: #10b981;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  min-width: 250px;
  flex-grow: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #10b981;
  }
`;

const StyledSearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 0.85rem;
  transform: translateY(-50%);
  color: #9ca3af;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const AddHallCard = styled.button`
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

  &:hover {
    background-color: #f0fdf4;
    border-style: solid;
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

// --- Component ---

const HallsContent = () => {
  const [buildingId, setBuildingId] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const {
    data: buildingsData,
    isPending: isLoadingBuildings,
    error: errorBuildings,
  } = useGetBuildings();

  const { halls, isLoadingHalls, errorFetchingHall, refetchHalls } =
    useGetHalls(buildingId);

  const filteredHalls = useMemo(() => {
    if (!halls?.data) return [];
    return halls.data.filter((hall) =>
      hall.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [halls, searchQuery]);

  if (isLoadingBuildings) return <Spinner />;
  const apiError = errorBuildings || errorFetchingHall;
  if (apiError)
    return <ErrorFallBack message={apiError.message} onRetry={refetchHalls} />;

  const cardButtons = [
    {
      label: "عرض تفاصيل القاعة",
      logo: <PiDoorDuotone size={20} />,
      path: "details",
      state: "page with id",
    },
    {
      label: "تعديل بيانات القاعه",
      logo: <CiEdit size={20} />,
      path: "update-hall",
      state: "page with id",
    },
  ];

  return (
    <PageContainer>
      <Header>
        <Title>إدارة القاعات</Title>
        <AddButton onClick={() => navigate("create-hall")}>
          <FaPlus />
          <span>إضافة قاعة</span>
        </AddButton>
      </Header>

      <SubHeader>
        <FilterContainer>
          <FilterSelect
            value={buildingId}
            onChange={(e) => setBuildingId(e.target.value)}
          >
            <option value="">-- الرجاء اختيار مبنى لعرض القاعات --</option>
            {buildingsData?.data?.map((building) => (
              <option key={building.id} value={building.id}>
                {building.name}
              </option>
            ))}
          </FilterSelect>
        </FilterContainer>
        <SearchContainer>
          <StyledSearchIcon />
          <SearchInput
            placeholder="ابحث عن قاعة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={!buildingId || isLoadingHalls}
          />
        </SearchContainer>
      </SubHeader>

      {isLoadingHalls ? (
        <Spinner />
      ) : !buildingId ? (
        <EmptyStateContainer>
          <h3>لم يتم اختيار مبنى</h3>
          <p>الرجاء تحديد مبنى من القائمة أعلاه لبدء عرض القاعات.</p>
        </EmptyStateContainer>
      ) : filteredHalls.length > 0 ? (
        <GridContainer>
          {filteredHalls.map((hall) => (
            <SuperCard key={hall.id} data={hall} Buttons={cardButtons} />
          ))}
          <AddHallCard onClick={() => navigate("create-hall")}>
            <FaPlus />
            <span>إضافة قاعة جديدة</span>
          </AddHallCard>
        </GridContainer>
      ) : (
        <EmptyStateContainer>
          <h3>لا توجد قاعات في هذا المبنى</h3>
          <p>يمكنك إضافة قاعة جديدة باستخدام الزر أعلاه.</p>
        </EmptyStateContainer>
      )}
    </PageContainer>
  );
};

export default HallsContent;
