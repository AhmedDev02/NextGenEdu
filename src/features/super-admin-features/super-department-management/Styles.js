import { PiBooksThin } from "react-icons/pi";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #374151;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid #d1d5db;
  padding: 0.75rem 1rem;
  padding-right: 3rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: var(--color-primary-green);
  }

  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
  }
`;

export const StyledIcon = styled(PiBooksThin)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.8rem;
  color: #9ca3af;
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: -0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 1rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: auto;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const EditButton = styled(Button)`
  background: transparent;
  border: 1px solid #d1d5db;
  color: #111827;
  outline: none;
  &:focus{
    outline: none;
  }

  &:hover {
    background-color: #f9fafb;
  }
`;

export const ConfirmButton = styled(Button)`
  background: var(--color-primary-green);
  color: white;

  &:hover {
    box-shadow: var(--shadow-primary);
  }
`;
export const DeleteDepartment = styled(Button)`
background: var(--color-danger-red);
color: white;
margin-top: 2rem;
outline: none;
&:focus{
    outline: none;
}
`