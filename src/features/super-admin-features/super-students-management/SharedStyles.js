import { keyframes, styled } from "styled-components";
import { FaSearch } from "react-icons/fa";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2.5rem;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 992px) {
    padding: 1.5rem;
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #1f2937;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const FilterSelect = styled.select`
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #fff;
  color: #374151;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #10b981;
  }
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

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ContentContainer = styled.div`
  margin-top: 2rem;
`;

export const InfoContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const EntityCount = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 8px;
  outline: none;
  border: 1px solid #d1d5db;
  padding: 0.75rem 3rem 0.75rem 1.5rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px #dcfce7;
  }
`;

export const StyledSearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 1.25rem;
  transform: translateY(-50%);
  color: #9ca3af;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const UserName = styled.span`
  font-weight: 600;
  color: #111827;
  font-size: 1.1rem;
`;

export const UserId = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const Department = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: #374151;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  color: #4b5563;
  padding: 4rem 1rem;
  text-align: center;
  background-color: #f9fafb;
  border-radius: 12px;
  margin-top: 2rem;
`;

export const AddButton = styled(ActionButton)`
  min-height: 150px;
  min-width: 250px;
  flex-direction: column;
  font-size: 1.25rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const EditButton = styled.button`
  background-color: var(--color-grey-200);
  outline: none;
  border: none;
  border-radius: 1rem;
  padding: 0.75rem;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-3px);
  }

  svg {
    font-size: 2rem;
  }

  &:focus {
    outline: none;
  }

  &:active {
    scale: 0.9;
  }
`;