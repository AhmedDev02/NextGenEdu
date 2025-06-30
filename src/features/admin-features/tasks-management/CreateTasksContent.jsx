import styled from "styled-components";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { CiTextAlignJustify } from "react-icons/ci";
import DateSelector from "../../../ui/tharwat/DateSelector";
import { useState } from "react";
import HoursSelector from "../../../ui/tharwat/HoursSelector";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { useCreateAssignment } from "./useCreateAssignment";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const CreateContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
  border-radius: 12px;
  font-family: "Changa", sans-serif;
  background-color: transparent;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  align-items: flex-start;
`;
const NewsIcon = styled(HiOutlineNewspaper)`
  font-size: 22px;
  position: absolute;
  transform: translate(-5px, -25px);

  @media (max-width: 1027px) and (min-width: 767px) {
    font-size: 22px;
    transform: translate(-5px, -23px);
  }

  @media (max-width: 767px) {
    font-size: 20px;
    transform: translate(-5px, -23px);
  }
`;
const TextIcon = styled(CiTextAlignJustify)`
  font-size: 22px;
  position: absolute;
  transform: translate(-7px, 40px);

  @media (max-width: 1027px) and (min-width: 767px) {
    font-size: 18px;
    transform: translate(-7px, 38px);
  }

  @media (max-width: 767px) {
    font-size: 16px;
    transform: translate(-7px, 34px);
  }
`;

const ControlledContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: transparent;
  margin: auto;
`;
const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;
const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
`;
const ControlledInput = styled.input`
  min-width: 40%;
  padding: 10px;
  padding-inline: 30px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: var(--shadow-primary);
  font-weight: 600;
  overflow: visible;
  text-overflow: ellipsis;
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  padding-inline: 32px;
  border: none;
  font-weight: 600;
  border-radius: 8px;
  margin-bottom: 15px;
  height: 120px;
  resize: none;
  font-size: 18px;
  margin: auto;
  box-shadow: var(--shadow-primary);
`;
const LastDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  border-radius: 12px;
  font-family: "Changa", sans-serif;
  background-color: transparent;
`;
const LastDiv2 = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  border-radius: 12px;
  font-family: "Changa", sans-serif;
  background-color: transparent;
`;

const StyledButton = styled.button`
  width: 15%;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(to bottom, #ff3d60, #b82d42);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  font-family: Changa;
  margin-left: 10px;

  &:focus {
    background: #ffffff;
    color: black;
  }

  @media (max-width: 760px) {
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
  }
  @media (max-width: 1027px) and (min-width: 760px) {
    font-size: 12px;
  }
`;

const StyledFileInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: var(--green-primary);
  }
`;

const CreateTasksContent = () => {
  const { register, handleSubmit, reset } = useForm();
  const [date, setDate] = useState(null);
  const [hours, setHour] = useState(null);
  const { taskId: courseId } = useParams();
  const queryClient = useQueryClient();

  const { mutate } = useCreateAssignment();
  const onSubmit = (data) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    const formattedTime = format(hours, "HH:mm:ss");
    const formData = new FormData();
    formData.append("course_id", courseId);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("week", data.week);
    formData.append("type", data.type);
    formData.append("date", formattedDate);
    formData.append("time", formattedTime);
    if (data.total_degree) {
      formData.append("total_degree", data.total_degree);
    }
    if (data.file && data.file[0]) {
      formData.append("file", data.file[0]);
    }
    mutate(formData, {
      onSuccess: () => {
        toast.success("تم اضافة المحتوى بنجاح");
        queryClient.invalidateQueries(["assignments"]);
        reset();
      },
      onError: () => {
        toast.error("حدث خطأ اثناء اضافة المحتوى:");
      },
    });
  };

  return (
    <>
      <CreateContainer onSubmit={handleSubmit(onSubmit)}>
        <ControlledContainer>
          <Div>
            <Label htmlFor="title">عنوان الأسايمنت</Label>
            <NewsIcon />
            <ControlledInput
              {...register("title", { required: true })}
              name="title"
              type="text"
              placeholder=" أدخل عنوانًا يعبر عن محتوى الأسايمنت بشكل واضح."
            />
          </Div>
          <Div>
            <Label htmlFor="file">ارفع الملف</Label>
            <StyledFileInput
              type="file"
              {...register("file", { required: true })}
            />
          </Div>
          <Div>
            <Label htmlFor="total_degree">درجة الأسايمنت</Label>
            <ControlledInput
              {...register("total_degree", { required: true, min: 0 })}
              name="total_degree"
              type="number"
              min="0"
              defaultValue={10}
              style={{ padding: "10px" }}
            />
          </Div>
        </ControlledContainer>

        <InputContainer>
          <Label htmlFor="description">وصف الأسايمنت</Label>
          <TextIcon />

          <Textarea
            {...register("description", { required: true })}
            name="description"
            placeholder="قدم شرحًا تفصيليًا حول المطلوب في الأسايمنت، مع أي تعليمات إضافية."
          />
        </InputContainer>

        <LastDiv>
          <h1>الموعد النهائي</h1>
          <p style={{ marginTop: "10px" }}>
            ⏰ حدد الموعد النهائي لتسليم الأسايمنت وتوقيت إغلاقه.
          </p>

          <LastDiv2>
            <h5
              style={{
                width: "12%",
                backgroundColor: "transparent",
                textAlign: "center",
                padding: "8px",
              }}
            >
              ينتهي في
            </h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <DateSelector onDate={setDate} />
              <HoursSelector onHours={setHour} />
            </div>
          </LastDiv2>

          <LastDiv2 style={{ justifyContent: "flex-end" }}>
            <StyledButton type="submit">نشر !</StyledButton>
          </LastDiv2>
        </LastDiv>
      </CreateContainer>
    </>
  );
};

export default CreateTasksContent;
