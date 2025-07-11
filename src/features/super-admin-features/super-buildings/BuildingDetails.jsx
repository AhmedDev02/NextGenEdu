import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  TbBuilding,
  TbCode,
  TbWorldLatitude,
  TbWorldLongitude,
  TbRoute,
} from "react-icons/tb";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-hot-toast";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import "leaflet-routing-machine";

import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import useGetOneBuilding from "./useGetOneBuilding";
import Modal from "../../../ui/amr/Modal";
import DeleteBuilding from "./DeleteBuilding";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DetailsPageContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;
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
  padding: 2rem;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const TitleGroup = styled.div`
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem 1.5rem;
  align-items: center;
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
`;

const MapWrapper = styled.div`
  height: 500px;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const RoutingMachine = ({ start, end }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !start || !end) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
      routeWhileDragging: false,
      lineOptions: {
        styles: [{ color: "#0d825b", weight: 4 }],
      },
      show: true,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      createMarker: function () {
        return null;
      },
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, start, end]);

  return null;
};

function BuildingDetails() {
  const { buildingId } = useParams();
  const navigate = useNavigate();
  const {
    data: building,
    isPending,
    error,
    refetch,
  } = useGetOneBuilding(buildingId);

  const [userPosition, setUserPosition] = useState(null);
  const [showRoute, setShowRoute] = useState(false);

  const handleGetDirections = () => {
    if (!navigator.geolocation) {
      return toast.error("Geolocation is not supported by your browser.");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition([position.coords.latitude, position.coords.longitude]);
        setShowRoute(true);
        toast.success("تم تحديد موقعك! جاري حساب المسار");
      },
      () => {
        toast.error(
          "غير قادر على الوصول لموقعك. الرجاء تفعيل خدمة تحديد المواقع."
        );
      }
    );
  };

  if (isPending) return <Spinner />;
  if (error) return <ErrorFallBack message={error.message} onRetry={refetch} />;

  const { name, code, latitude, longitude } = building.data;
  const buildingPosition = [parseFloat(latitude), parseFloat(longitude)];

  return (
    <DetailsPageContainer>
      <DetailsCard>
        <Header>
          <TitleGroup>
            <Title>{name}</Title>
            <IconWrapper>
              <TbBuilding size={28} />
            </IconWrapper>
          </TitleGroup>
          <ButtonsContainer>
            <ActionButton onClick={handleGetDirections} bgColor="#10b981">
              <TbRoute />
              <span>اظهر الطريق</span>
            </ActionButton>
            <Modal>
              <Modal.Open opens="delete-building">
                <ActionButton type="button" bgColor="#fa5451">
                  <FaTrash />
                  <span>حذف</span>
                </ActionButton>
              </Modal.Open>
              <Modal.Window name="delete-building">
                <DeleteBuilding buildingId={buildingId} />
              </Modal.Window>
            </Modal>
            <ActionButton
              onClick={() =>
                navigate(`/super-admin/buildings/update-building/${buildingId}`)
              }
              type="button"
              bgColor="#5157fa"
            >
              <FaEdit />
              <span>تعديل</span>
            </ActionButton>
          </ButtonsContainer>
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

        <MapWrapper>
          <MapContainer
            center={buildingPosition}
            zoom={16}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={buildingPosition}></Marker>

            {userPosition && <Marker position={userPosition}></Marker>}

            {showRoute && userPosition && (
              <RoutingMachine start={userPosition} end={buildingPosition} />
            )}
          </MapContainer>
        </MapWrapper>
      </DetailsCard>
    </DetailsPageContainer>
  );
}

export default BuildingDetails;
