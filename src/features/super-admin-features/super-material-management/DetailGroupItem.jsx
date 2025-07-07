// src/components/AddCourseForm/DetailGroupItem.jsx

import useGetTeachers from "./useGetTeachers";
import TeacherSubManager from "./TeacherSubManager";
import { FaTrash, FaUniversity, FaUserGraduate } from "react-icons/fa";
import {
  DetailsGroup,
  RemoveDetailButton,
  Grid,
  FormGroup,
  Label,
  StyledSelect,
} from "./AddCourse.styles";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";

const semesterTerms = [
  { label: "فرقة أعدادية / ترم اول", value: 1 },
  { label: "فرقة أعدادية / ترم ثاني", value: 2 },
  { label: "فرقة أولي / ترم اول", value: 3 },
  { label: "فرقة أولي / ترم ثاني", value: 4 },
  { label: "فرقة ثانية / ترم اول", value: 5 },
  { label: "فرقة ثانية / ترم ثاني", value: 6 },
  { label: "فرقة ثالثة / ترم اول", value: 7 },
  { label: "فرقة ثالثة / ترم ثاني", value: 8 },
  { label: "فرقة رابعة / ترم اول", value: 9 },
  { label: "فرقة رابعة / ترم ثاني", value: 10 },
];

const DetailGroupItem = ({ control, register, index, remove, departments }) => {
  const {
    teachers,
    isPending: isPendingTeachers,
    error,
    refetch,
  } = useGetTeachers();

  if (error) {
    return (
      <ErrorFallBack
        message={error.message || "خطأ في عرض المعلومات "}
        onRetry={refetch}
      />
    );
  }
  return (
    <DetailsGroup>
      <RemoveDetailButton type="button" onClick={() => remove(index)}>
        <FaTrash /> إزالة المجموعة
      </RemoveDetailButton>
      <Grid>
        <FormGroup>
          <Label>
            <FaUniversity /> القسم
          </Label>
          <StyledSelect
            {...register(`details.${index}.department`, {
              required: "يجب اختيار القسم",
            })}
          >
            <option value="" disabled selected>
              -- اختر القسم --
            </option>
            {departments?.map((dep) => (
              <option key={dep.id} value={dep.id}>
                {dep.name}
              </option>
            ))}
          </StyledSelect>
        </FormGroup>

        <FormGroup>
          <Label>
            <FaUserGraduate /> الفرقة الدراسية
          </Label>
          <StyledSelect
            {...register(`details.${index}.semester`, { required: true })}
          >
            <option value="" disabled selected>
              -- اختر الفرقة --
            </option>
            {semesterTerms.map((sem) => (
              <option key={sem.value} value={sem.value}>
                {sem.label}
              </option>
            ))}
          </StyledSelect>
        </FormGroup>

        <FormGroup colSpan={2}>
          <TeacherSubManager
            nestIndex={index}
            control={control}
            availableTeachers={teachers?.data}
            isLoading={isPendingTeachers}
          />
        </FormGroup>
      </Grid>
    </DetailsGroup>
  );
};

export default DetailGroupItem;
