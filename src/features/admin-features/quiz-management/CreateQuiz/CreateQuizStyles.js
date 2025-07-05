import styled from "styled-components";

// --- All Style Definitions ---
export const FormContainer = styled.form`
  min-width: 80%;
  margin: auto;
  border-radius: 12px;
  padding-bottom: 50px;
  font-family: "Changa", sans-serif;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  font-size: 1rem;
`;
export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  height: 120px;
  resize: none;
  font-size: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-family: inherit;
`;
export const Label = styled.label`
  display: block;
  text-align: right;
  margin-bottom: 8px;
  font-weight: 600;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;
export const CreateContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin: auto;
  border-radius: 12px;
  font-family: "Changa", sans-serif;
`;
export const ControlledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
`;
export const ControlledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  font-size: 1rem;
  &[readonly] {
    background-color: #f1f5f9;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const P = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  text-align: right;
`;
export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background:var(--color-primary-green);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: "Changa", sans-serif;
  &:hover {
    background-color: #dc2626;
  }
`;
export const SchedulerWrapper = styled(Div)`

  grid-column: 1 / -1;
`;
export const SchedulerContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 5px;
  gap: 5px;
`;
export const DatePickerWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container input {
    width: 100%;
    border: none;
    text-align: center;
    background-color: transparent;
    cursor: pointer;
    font-size: 0.95rem;
    font-family: "Changa", sans-serif;
    color: #334155;
    &:focus {
      outline: none;
    }
  }
`;
export const TimeLabel = styled.span`
  font-size: 0.85rem;
  color: #64748b;
  white-space: nowrap;
`;
export const Separator = styled.div`
  width: 2px;
  align-self: stretch;
  background-color:rgb(173, 173, 173);
  margin: 5px 0;
`;
export const QuestionsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  border-top: 1px solid #e2e8f0;
  padding-top: 30px;
`;
export const QuestionBox = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  gap: 20px;
`;
export const QuestionContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const QuestionTextarea = styled(Textarea)`
  height: 80px;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0;
  background-color: #f8fafc;
`;
export const AnswerOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;
export const AnswerOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const AnswerInput = styled(Input)`
  margin-bottom: 0;
  flex-grow: 1;
`;
export const SetCorrectButton = styled.button`
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.isCorrect ? "#16a34a" : "#cbd5e1")};
  background-color: ${(props) => (props.isCorrect ? "#dcfce7" : "#fff")};
  color: ${(props) => (props.isCorrect ? "#16a34a" : "#64748b")};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;
`;
export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #ef4444;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid #ef4444;
  border-radius: 1rem;
`;
export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f5f9;
  border: 2px dashed #cbd5e1;
  color: #64748b;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
  &:hover {
    background-color: #e2e8f0;
    border-color: #94a3b8;
  }
`;
export const QuestionSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50px;
  align-items: center;
`;
export const InfoBadge = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  background-color: ${(props) => props.color || "#94a3b8"};
`;
export const AddQuestionButton = styled(AddButton)`
  font-size: 1.2rem;
  padding: 15px;
`;
