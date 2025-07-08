// src/features/buildings/BuildingDetails.jsx

import styled, { keyframes } from "styled-components";
import { useParams } from "react-router-dom";
import {
  TbBuilding,
  TbCode,
  TbWorldLatitude,
  TbWorldLongitude,
} from "react-icons/tb";

import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import BuildingMap from "./BuildingMap";
import useGetOneBuilding from "./useGetOneBuilding";
import Modal from "../../../ui/amr/Modal";
import DeleteBuilding from "./DeleteBuilding";
import { FaTrash } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DetailsCard = styled.div`
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
`;

const IconWrapper = styled.div`
  background-color: #e6f9f1;
  color: #0d825b;
  border-radius: 12px;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentGrid = styled.div`
  padding: 2.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem 1.5rem;
  align-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const InfoRow = styled.div`
  grid-column: 1 / -1;
  display: contents; // Allows children to participate in the parent grid
`;

const Label = styled.span`
  font-weight: 600;
  color: #4b5563;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Value = styled.span`
  font-family: monospace;
  font-size: 1.1rem;
  color: #111827;
  background-color: #f9fafb;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`;
export const ActionButton = styled.button`
  background: ${(props) => props.bgColor || "var(--color-primary-green)"};
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
  &:active {
    scale: 0.95;
  }
`;

const DetailsPageContainer = styled.div`
  padding: 2.5rem;
  animation: ${fadeIn} 0.5s ease-out;
  /* Use max-width for better responsiveness */
  max-width: 1200px;
  width: 100%;
  margin: 2rem auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem auto;
  }
`;

// Add this new styled component
const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

// Make sure your Header has justify-content
const Header = styled.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: space-between; /* This will push items to the ends */
  gap: 1.5rem;
`;

function BuildingDetails() {
  const { buildingId } = useParams();
  const {
    data: building,
    isPending,
    error,
    refetch,
  } = useGetOneBuilding(buildingId);

  if (isPending) return <Spinner />;
  if (error) return <ErrorFallBack message={error.message} onRetry={refetch} />;

  const { name, code, latitude, longitude } = building.data;

  const position = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };

  return (
    <DetailsPageContainer>
      <DetailsCard>
        <Header>
          <TitleGroup>
            <Title>{name}</Title>
            <IconWrapper>
              <TbBuilding size={32} />
            </IconWrapper>
          </TitleGroup>
          <Modal>
            <Modal.Open opens="delete-dept">
              <ActionButton type="button" bgColor="#fa5451">
                <FaTrash />
                <span>حذف المبني</span>
              </ActionButton>
            </Modal.Open>
            <Modal.Window name="delete-dept">
              <DeleteBuilding buildingId={buildingId} onCloseModal />
            </Modal.Window>
          </Modal>
        </Header>

        <ContentGrid>{/* ... rest of your component */}</ContentGrid>
        <BuildingMap position={position} />
      </DetailsCard>
    </DetailsPageContainer>
  );
}

export default BuildingDetails;

/* import styled, { keyframes } from "styled-components";
import { useParams } from "react-router-dom";
import {
  TbBuilding,
  TbCode,
  TbWorldLatitude,
  TbWorldLongitude,
} from "react-icons/tb";

import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import useGetOneBuilding from "./useGetOneBuilding";

const fadeIn = keyframes`
   from { opacity: 0; transform: translateY(20px); }
   to { opacity: 1; transform: translateY(0); }
 `;

const DetailsPageContainer = styled.div`
  padding: 2.5rem;
  animation: ${fadeIn} 0.5s ease-out;
  margin: 2rem auto;
  width: 100rem;
`;

const DetailsCard = styled.div`
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const Header = styled.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
`;

const IconWrapper = styled.div`
  background-color: #e6f9f1;
  color: #0d825b;
  border-radius: 12px;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentGrid = styled.div`
  padding: 2.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem 1.5rem;
  align-items: center;
`;

const InfoRow = styled.div`
  grid-column: 1 / -1;
  display: contents;
`;

const Label = styled.span`
  font-weight: 600;
  color: #4b5563;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Value = styled.span`
  font-family: monospace;
  font-size: 1.1rem;
  color: #111827;
  background-color: #f9fafb;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`;

function BuildingDetails() {
  const { buildingId } = useParams();
  const { data: building, isPending, error } = useGetOneBuilding(buildingId);

  if (isPending) return <Spinner />;
  if (error) return <ErrorFallBack message={error.message} />;

  const { name, code, latitude, longitude } = building.data;

  const API_KEY = "YOUR_Maps_API_KEY";

  const mapSrc = `https:www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${latitude},${longitude}&zoom=17&output=embed`;

  return (
    <DetailsPageContainer>
      <DetailsCard>
        <Header>
          <IconWrapper>
            <TbBuilding size={32} />
          </IconWrapper>
          <Title>{name}</Title>
        </Header>

        <ContentGrid>
          <InfoRow>
            <Label>
              <TbCode size={22} /> الكود
            </Label>
            <Value>{code}</Value>
          </InfoRow>
          <InfoRow>
            <Label>
              <TbWorldLatitude size={22} /> خط العرض
            </Label>
            <Value>{latitude}</Value>
          </InfoRow>
          <InfoRow>
            <Label>
              <TbWorldLongitude size={22} /> خط الطول
            </Label>
            <Value>{longitude}</Value>
          </InfoRow>
        </ContentGrid>

        <iframe
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapSrc}
        ></iframe>
      </DetailsCard>
    </DetailsPageContainer>
  );
}

export default BuildingDetails; */
