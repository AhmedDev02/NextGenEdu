import styled from "styled-components";
import Button from "../../../ui/Button";

export const Container = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
    gap: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 1rem;
  }
`;

export const Title = styled.div``;

export const Description = styled.div``;

export const P = styled.p`
  margin-bottom: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 4.5rem;
  border-radius: 0.8rem;
  border: none;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  font-size: 1.6rem;
  padding: 0.8rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Changa", sans-serif;
    font-size: 1.5rem;
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }

  @media (max-width: 768px) {
    height: 4rem;
    font-size: 1.4rem;
    padding: 0.6rem;

    &::placeholder {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    height: 3.5rem;
    font-size: 1.2rem;

    &::placeholder {
      font-size: 1.1rem;
    }
  }
`;

export const DescriptionInput = styled.textarea`
  width: 100%;
  min-height: 8rem;
  resize: vertical;
  border-radius: 0.8rem;
  border: none;
  outline: none;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  font-size: 1.6rem;
  padding: 0.8rem;
  font-family: "Changa", sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Changa", sans-serif;
    font-size: 1.5rem;
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }

  @media (max-width: 768px) {
    min-height: 6rem;
    font-size: 1.4rem;
    padding: 0.6rem;

    &::placeholder {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    min-height: 5rem;
    font-size: 1.2rem;

    &::placeholder {
      font-size: 1.1rem;
    }
  }
`;

export const Amr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const UploadsContainer = styled.div`
  width: 40%;
  border-radius: 0.8rem;
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const UploadItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.4rem;
  border: 1px solid #ddd;
  border-radius: 0.4rem;
  background: #f9f9f9;
  width: 100%;

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    a {
      font-size: 1.2rem;
    }
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 1.4rem;
  cursor: pointer;
  margin-right: 0.8rem;

  &:hover {
    color: darkred;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    align-items: stretch;
  }
`;

export const SendButton = styled(Button)`
  width: 40%;
  max-width: 30rem;
  min-width: 15rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Publish = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 12rem;
    height: 5rem;
    background: var(--color-primary-green);
    border: none;
    outline: none;
    color: white;
    font-family: "Changa", sans-serif;
    font-weight: bold;
    font-size: 1.8rem;
    border-radius: 1.5rem;
    transition: all 0.1s;
    &:active {
      scale: 0.95;
    }

    @media (max-width: 768px) {
      width: 10rem;
      height: 4.5rem;
      font-size: 1.6rem;
    }

    @media (max-width: 480px) {
      width: 8rem;
      height: 4rem;
      font-size: 1.4rem;
    }
  }
`;

export const Selections = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const Select = styled.select`
  outline: none;
  border-radius: 5rem;
  width: 100%;
  max-width: 30rem;
  min-width: 15rem;
  padding: 0.6rem 1rem;
  cursor: pointer;
  font-size: 1.6rem;
  transition: all 0.3s;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.4rem;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
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
`;


