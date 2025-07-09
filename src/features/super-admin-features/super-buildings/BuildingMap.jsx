
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
import useGetOneBuilding from "./useGetOneBuilding";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DetailsPageContainer = styled.div`
  padding: 2.5rem;
  animation: ${fadeIn} 0.5s ease-out;
  max-width: 900px;
  margin: 2rem auto;
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

  const mapSrc = `http://googleusercontent.com/maps.google.com/4${API_KEY}&q=${latitude},${longitude}&zoom=17&output=embed`;

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
          src={mapSrc}
        ></iframe>
      </DetailsCard>
    </DetailsPageContainer>
  );
}

export default BuildingDetails;
