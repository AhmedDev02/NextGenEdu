import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import styled from "styled-components";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import useCreateBuilding from "./useCreateBuilding";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});


const FormPageContainer = styled.div`
  max-width: 800px; 
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const FormContainer = styled.form`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-weight: 500;
  color: #4b5563;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px #dcfce7;
  }

  &:disabled {
    background-color: #e5e7eb;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
`;

const MapWrapper = styled.div`
  height: 350px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #d1d5db;
`;

const InstructionText = styled.p`
  text-align: center;
  color: #6b7280;
  font-style: italic;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 1.5rem;
`;

const SubmitButton = styled.button`
  background-color: #10b981;
  color: white;
  padding: 0.8rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #059669;
  }

  &:disabled {
    background-color: #a7f3d0;
    cursor: not-allowed;
  }
`;

const defaultCenter = [30.5878, 31.4836];

function MapClickHandler({ setPosition, setFormValue }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      setFormValue("latitude", lat.toFixed(10), { shouldValidate: true });
      setFormValue("longitude", lng.toFixed(10), { shouldValidate: true });
    },
  });
  return null;
}

function AddBuildingContent() {
  const [markerPosition, setMarkerPosition] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const { mutate: createBuilding, isPending } = useCreateBuilding();

  const onSubmit = (data) => {
    createBuilding(data, {
      onSuccess: () => {
        toast.success("تم إنشاء المبنى بنجاح");
        reset();
        navigate("/super-admin/buildings");
      },
      onError: (err) => toast.error(err.message),
    });
  };

  return (
    <FormPageContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>
          <FaBuilding />
          <span>إنشاء مبنى جديد</span>
        </FormTitle>

        <FormRow>
          <Label htmlFor="name">اسم المبنى</Label>
          <Input
            type="text"
            id="name"
            disabled={isPending}
            {...register("name", { required: "هذا الحقل مطلوب" })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormRow>

        <FormRow>
          <Label htmlFor="code">كود المبنى</Label>
          <Input
            type="text"
            id="code"
            disabled={isPending}
            {...register("code", { required: "هذا الحقل مطلوب" })}
          />
          {errors.code && <ErrorMessage>{errors.code.message}</ErrorMessage>}
        </FormRow>

        <hr />

        <FormTitle style={{ fontSize: "1.5rem" }}>
          <FaMapMarkerAlt />
          <span>تحديد الموقع</span>
        </FormTitle>
        <MapWrapper>
          <MapContainer
            center={defaultCenter}
            zoom={15}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapClickHandler
              setPosition={setMarkerPosition}
              setFormValue={setValue}
            />
            {markerPosition && <Marker position={markerPosition}></Marker>}
          </MapContainer>
        </MapWrapper>
        <InstructionText>
          انقر على الخريطة لتحديد إحداثيات المبنى
        </InstructionText>

        <InputGrid>
          <FormRow>
            <Label htmlFor="latitude">خط العرض (Latitude)</Label>
            <Input
              type="text"
              id="latitude"
              disabled={isPending}
              {...register("latitude", {
                required: "هذا الحقل مطلوب",
                pattern: {
                  value: /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,15}/,
                  message: "صيغة خط العرض غير صحيحة",
                },
              })}
            />
            {errors.latitude && (
              <ErrorMessage>{errors.latitude.message}</ErrorMessage>
            )}
          </FormRow>

          <FormRow>
            <Label htmlFor="longitude">خط الطول (Longitude)</Label>
            <Input
              type="text"
              id="longitude"
              disabled={isPending}
              {...register("longitude", {
                required: "هذا الحقل مطلوب",
                pattern: {
                  value: /^-?((1[0-7]|[1-9])?\d|180)\.{1}\d{1,15}/,
                  message: "صيغة خط الطول غير صحيحة",
                },
              })}
            />
            {errors.longitude && (
              <ErrorMessage>{errors.longitude.message}</ErrorMessage>
            )}
          </FormRow>
        </InputGrid>

        <ButtonContainer>
          <SubmitButton type="submit" disabled={isPending}>
            {isPending ? "جاري الإنشاء..." : "إنشاء المبنى"}
          </SubmitButton>
        </ButtonContainer>
      </FormContainer>
    </FormPageContainer>
  );
}

export default AddBuildingContent;
