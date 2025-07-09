// src/features/halls/HallDetails.jsx

import styled, { keyframes } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  PiDoorDuotone,
  PiHashStraightDuotone,
  PiUsersDuotone,
  PiBuildingDuotone,
} from "react-icons/pi";
import { TbBuilding, TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";
import { GoBookmarkSlash } from "react-icons/go";

import useGetOneHall from "./useGetOneHall";
import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "../../../ui/amr/Modal";
import DeleteHall from "./DeleteHall";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
const Container = styled.div`
  background-color: #fff;
  padding: 6rem;
  animation: ${fadeIn} 0.5s ease-out;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const DetailsPageContainer = styled.div`
  width: 100rem;
  margin: 2rem auto;
  padding: 0 1.5rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

const DetailsCard = styled.div`
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const Header = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
`;

const StatusBadge = styled.span`
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: capitalize;
  background-color: ${(props) =>
    props.status === "empty" ? "#e6f9f1" : "#fff5f5"};
  color: ${(props) => (props.status === "empty" ? "#0d825b" : "#e53e3e")};
  border: 1px solid
    ${(props) => (props.status === "empty" ? "#a7f3d0" : "#fed7d7")};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.span`
  font-weight: 600;
  color: #4b5563;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
`;

const Value = styled.span`
  font-size: 1.1rem;
  color: #111827;
  padding-left: 2rem;
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
const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

function HallDetails() {
  const { hallId } = useParams();
  const { hall, isPending, error, refetch } = useGetOneHall(hallId);
  const navigate = useNavigate();

  if (isPending) return <Spinner />;
  if (error) return <ErrorFallBack message={error.message} onRetry={refetch} />;

  const { name, code, status, floor, audience, latitude, longitude, building } =
    hall.data;

  return (
    <Container>
      <DetailsPageContainer>
        <DetailsCard>
          <Header>
            <TitleGroup>
              <PiDoorDuotone size={36} color="#0d825b" />
              <Title>
                تفاصيل القاعة: <span style={{ color: "#0d825b" }}>{name}</span>
              </Title>
            </TitleGroup>
            <StatusBadge status={status}>{status}</StatusBadge>
          </Header>

          <ContentGrid>
            <InfoRow>
              <Label>
                <PiHashStraightDuotone /> كود القاعة
              </Label>
              <Value>{code}</Value>
            </InfoRow>
            <InfoRow>
              <Label>
                <PiBuildingDuotone /> المبنى
              </Label>
              <Value>{building.name}</Value>
            </InfoRow>
            <InfoRow>
              <Label>
                <GoBookmarkSlash /> كود المبنى
              </Label>
              <Value>{building.code}</Value>
            </InfoRow>
            <InfoRow>
              <Label>
                <TbBuilding />
                الطابق
              </Label>
              <Value>{floor}</Value>
            </InfoRow>
            <InfoRow>
              <Label>
                <PiUsersDuotone />
                السعة
              </Label>
              <Value>{audience > 0 ? `${audience} طالب` : "غير محدد"}</Value>
            </InfoRow>
            <InfoRow>
              <Label>
                <TbWorldLatitude /> خط العرض
              </Label>
              <Value>{latitude}</Value>
            </InfoRow>
            <InfoRow>
              <Label>
                <TbWorldLongitude /> خط الطول
              </Label>
              <Value>{longitude}</Value>
            </InfoRow>
          </ContentGrid>
        </DetailsCard>
      </DetailsPageContainer>
      <ButtonsContainer>
        <Modal>
          <Modal.Open opens="delete-hall">
            <ActionButton type="button" bgColor="#fa5451">
              <FaTrash />
              <span>حذف القاعة</span>
            </ActionButton>
          </Modal.Open>
          <Modal.Window name="delete-hall">
            <DeleteHall onCloseModal hallId={hallId} />
          </Modal.Window>
        </Modal>
        <ActionButton
          onClick={() => navigate(`/super-admin/halls/update-hall/${hallId}`)}
          type="button"
          bgColor="#5157fa"
        >
          <FaEdit />
          <span>تعديل بيانات القاعه</span>
        </ActionButton>
      </ButtonsContainer>
    </Container>
  );
}

export default HallDetails;
