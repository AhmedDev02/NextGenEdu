import styled from "styled-components";
import Button from "../../../ui/Button";
import { useEffect, useState } from "react";
import { useUser } from "../../../hooks/useUser";
import DateSelector from "./DateSelector";
import HoursSelector from "./HoursSelector";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useCreateAnnouncement } from "./useCreateAnnouncement";

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
  ${({ required }) =>
    required &&
    `
    border: 2px solid red;
  `}
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
  /* Apply red border for required fields */
  ${({ required }) =>
    required &&
    `
    border: 2px solid red;
  `}
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;

  /* Add red asterisk for required fields */
  ${({ required }) =>
    required &&
    `
    &::after {
      content: " *";
      color: red;
    }
  `}
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
  /* Apply red border for required fields */
  ${({ required }) =>
    required &&
    `
    border: 2px solid red;
  `}
`;
const DropDownDiv = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  gap: 5px;
`;

const Option = styled.option``;
const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const AddNewsContent = () => {
  const { user } = useUser();
  const semesters = user.semesters.data;
  const { mutate } = useCreateAnnouncement();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const [courses, setCourses] = useState([]);
  const [teacherSemesters, setTeacherSemesters] = useState(semesters[0]?.id);
  const [courseId, setCourseId] = useState(null);
  const [hours, setHours] = useState(null);
  const [date, setDate] = useState(null);

  // Filtering courses based on teacher's semester
  useEffect(() => {
    const filteredCourses = user?.courses?.data?.filter((course) => {
      return +course?.semester?.id === +teacherSemesters;
    });
    setCourses(filteredCourses);
    // Automatically select the first course if no courseId is selected
    if (!courseId && filteredCourses.length > 0) {
      setCourseId(filteredCourses[0]?.id);
      setValue("course", filteredCourses[0]?.id); // setting course value
    }
  }, [teacherSemesters, user?.courses?.data, courseId, setValue]);

  const onSubmit = (data) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    const formattedTime = format(hours, "HH:mm");
    const request = {
      course_id: courseId,
      title: data.notice,
      body: data.content,
      date: formattedDate,
      time: formattedTime,
    };
    try {
      mutate({ data: request });
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormContainer>
      <InputContainer>
        <Label for="title">العنوان</Label>

        <Input
          name="title"
          {...register("title", { required: "العنوان مطلوب" })}
          placeholder="قم بإضافة ملاحظة وتنبيه للطلاب!"
        />
      </InputContainer>

      <InputContainer>
        <Label for="content">الخبر</Label>
        <Textarea
          name="content"
          {...register("content", { required: "الخبر مطلوب" })}
          placeholder="أضف تفاصيل الخبر لتوضيح المعلومات للطلاب بشكل شامل ودقيق"
        />
      </InputContainer>

      <DropDownDiv>
        <Label for="department">الفرقة الدراسية</Label>
        <Dropdown
          name="department"
          value={teacherSemesters}
          onChange={(e) => {
            const semesterId = e.target.value;
            setTeacherSemesters(semesterId);
            setValue("department", semesterId); // set department value
          }}
        >
          {semesters.map((semester) => {
            return (
              <Option key={semester.id} value={semester.id}>
                {semester.name}
              </Option>
            );
          })}
        </Dropdown>
        {errors.department && <span>{errors.department.message}</span>}
        {/* Arabic Error Message */}
        <Label for="course">الفرقة الدراسية</Label>
        <Dropdown
          name="course"
          value={courseId}
          onChange={(e) => {
            setCourseId(e.target.value);
            setValue("course", e.target.value); // set course value
          }}
        >
          {courses.length > 0 && (
            <Option value="" disabled>
              Select a course
            </Option>
          )}
          {courses.map((course) => {
            return (
              <Option key={course.id} value={course.id}>
                {course.name}
              </Option>
            );
          })}
        </Dropdown>
        {errors.course && <span>{errors.course.message}</span>}
        {/* Arabic Error Message */}
      </DropDownDiv>

      <DateContainer>
        <Div>
          <Label htmlFor="date">تاريخ النشر</Label>
          <DateSelector onDate={setDate} name="date" />
        </Div>
        {errors.date && <span>{errors.date.message}</span>}{" "}
        {/* Arabic Error Message */}
        <Div>
          <Label htmlFor="hours">وقت النشر</Label>
          <HoursSelector onHours={setHours} name="hours" />
        </Div>
        {errors.hours && <span>{errors.hours.message}</span>}{" "}
        {/* Arabic Error Message */}
      </DateContainer>

      <Button
        onClick={handleSubmit(onSubmit)}
        variation="danger"
        style={{ width: "100%" }}
      >
        نشر !
      </Button>
    </FormContainer>
  );
};

export default AddNewsContent;
