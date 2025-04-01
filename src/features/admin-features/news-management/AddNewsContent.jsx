import styled from "styled-components";
import Button from "../../../ui/Button";
import { useState } from "react";

const FormContainer = styled.form`
  min-width: 80%;
  margin: auto;
  border-radius: 12px;
  padding-bottom: 50px;
  font-family: "Changa", sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: var(--shadow-primary);
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  height: 120px;
  resize: none;
  font-size: 18px;
  box-shadow: var(--shadow-primary);
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  align-items: flex-start;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: white;
  box-shadow: var(--shadow-primary);
`;
const DropDownDiv = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
const Option = styled.option``;
const Form = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [group, setGroup] = useState("الفرقة الثانية");
  const [subject, setSubject] = useState("Data Structure");
  console.log(group);
  function submit(e) {
    e.preventDefault();
  }
  return (
    <FormContainer>
      <InputContainer>
        <Label for="content">الخبر</Label>
        <Textarea
          name="content"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="أضف تفاصيل الخبر لتوضيح المعلومات للطلاب بشكل شامل ودقيق"
        />
      </InputContainer>
      <InputContainer>
        <Label for="notice">أضف ملاحظة</Label>

        <Input
          name="notice"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="قم بإضافة ملاحظة وتنبيه للطلاب!"
        />
      </InputContainer>

      <DropDownDiv>
        <Dropdown value={group} onChange={(e) => setGroup(e.target.value)}>
          <Option>الفرقة الأولى</Option>
          <Option>الفرقة الثانية</Option>
          <Option>الفرقة الثالثة</Option>
          <Option>الفرقة الرابعة</Option>
        </Dropdown>

        <Dropdown value={subject} onChange={(e) => setSubject(e.target.value)}>
          <Option>Data Structure</Option>
          <Option>Algorithms</Option>
          <Option>Databases</Option>
        </Dropdown>
      </DropDownDiv>
      <Button onClick={submit} variation="danger" style={{ width: "100%" }}>
        نشر !
      </Button>
    </FormContainer>
  );
};

export default Form;
