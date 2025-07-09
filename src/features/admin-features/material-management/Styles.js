import styled from "styled-components";
import Button from "../../../ui/Button";

export const Container = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 2rem;
    margin-top: 1rem;
  }
`;

export const Title = styled.div``;

export const Description = styled.div``;

export const P = styled.p`
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-size: 1.6rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 4.5rem;
  border-radius: 0.8rem;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-size: 1.6rem;
  padding: 0.8rem;
  box-shadow: var(--shadow-primary);
  &:focus {
    outline: 2px solid var(--color-primary-green);
    border-color: transparent;
  }

  &::placeholder {
    font-family: "Changa", sans-serif;
    font-size: 1.5rem;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    height: 4rem;
    font-size: 1.4rem;
    &::placeholder {
      font-size: 1.3rem;
    }
  }
`;

export const DescriptionInput = styled.textarea`
  width: 100%;
  min-height: 12rem;
  resize: vertical;
  border-radius: 0.8rem;
  border: 1px solid #ddd;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-size: 1.6rem;
  padding: 1rem;
  font-family: "Changa", sans-serif;
  box-shadow: var(--shadow-primary);

  &:focus {
    outline: 2px solid var(--color-primary-green);
    border-color: transparent;
  }

  &::placeholder {
    font-family: "Changa", sans-serif;
    font-size: 1.5rem;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    min-height: 10rem;
    font-size: 1.4rem;
    &::placeholder {
      font-size: 1.3rem;
    }
  }
`;

export const Amr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1.8rem;
`;

export const UploadsContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  border-radius: 0.8rem;
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  width: 100%;
  flex-wrap: wrap;
`;

export const SendButton = styled(Button)`
  width: 100%;
  max-width: 25rem;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

export const Publish = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    padding: 1rem 3rem;
    background: var(--color-primary-green);
    border: none;
    outline: none;
    color: white;
    font-family: "Changa", sans-serif;
    font-weight: bold;
    font-size: 1.8rem;
    border-radius: 1.5rem;
    transition: all 0.2s;
    cursor: pointer;

    &:active {
      transform: scale(0.95);
    }
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      width: 100%;
      font-size: 1.6rem;
    }
  }
`;

export const Selections = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Select = styled.select`
  outline: none;
  border: 1px solid #ddd;
  border-radius: 0.8rem;
  width: 100%;
  max-width: 30rem;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.6rem;
  transition: all 0.3s;
  background-color: #f9f9f9;
  box-shadow: var(--shadow-primary);
  &:hover {
    box-shadow: none;
  }
  &:focus {
    outline: 2px solid var(--color-primary-green);
    border-color: transparent;
  }

  @media (max-width: 768px) {
    max-width: none;
    font-size: 1.4rem;
  }
`;

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 1.6rem;
`;
