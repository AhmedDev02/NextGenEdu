import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 3rem 1rem;
  background-color: #f4f7f9;
  direction: rtl;
`;
export const FormContainer = styled.form`
  width: 100%;
  max-width: 900px;
  background: #fff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
`;
export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 2rem 0;
  text-align: center;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${({ colSpan }) => colSpan && `grid-column: span ${colSpan};`}
`;
export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: #fdfdfd;
  transition: all 0.2s ease;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #000;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  }
`;
export const StyledTextArea = styled(StyledInput).attrs({ as: "textarea" })`
  min-height: 100px;
  resize: vertical;
`;
export const StyledSelect = styled(StyledInput).attrs({ as: "select" })`
  cursor: pointer;
  &:disabled {
    background-color: #f8f8f8;
    cursor: not-allowed;
  }
`;
export const ItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  min-height: 20px;
`;
export const ItemTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #e3f2fd;
  color: #1565c0;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.9rem;
`;
export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #c62828;
  cursor: pointer;
  padding: 0;
  margin-right: -5px;
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &.primary {
    background-color: #00a859;
    color: white;
    &:hover {
      background-color: #008f4b;
    }
  }
  &.secondary {
    background-color: #343a40;
    color: white;
    &:hover {
      background-color: #23272b;
    }
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
`;
export const ErrorMessage = styled.p`
  color: #c62828;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;
export const DetailsGroup = styled.div`
  grid-column: span 2;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
  position: relative;
`;
export const RemoveDetailButton = styled(RemoveButton)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #777;
  border-radius: 1rem;
  padding: 0.2rem;
  &:hover {
    color: #c62828;
  }
`;
export const SubGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
`;