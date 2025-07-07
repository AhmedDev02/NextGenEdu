// src/components/AddCourseForm/TeacherSubManager.jsx

import { useFieldArray } from "react-hook-form";
import { FaChalkboardTeacher, FaTrash } from "react-icons/fa";
import {
  FormGroup,
  Label,
  StyledSelect,
  ItemsList,
  ItemTag,
  RemoveButton,
  SubGrid,
} from "./AddCourse.styles";
import toast from "react-hot-toast";

const TeacherSubManager = ({
  nestIndex,
  control,
  availableTeachers,
  isLoading,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `details.${nestIndex}.teachers`,
  });

  const handleTeacherSelect = (e) => {
    const selectedId = e.target.value;
    if (!selectedId) return;

    const isAlreadyAdded = fields.some((t) => t.id === Number(selectedId));
    if (isAlreadyAdded) {
      toast.error("هذا المدرس تم إضافته بالفعل");
      return;
    }

    const teacherToAdd = availableTeachers.find(
      (t) => t.id === Number(selectedId)
    );
    if (teacherToAdd) {
      append({ id: teacherToAdd.id, name: teacherToAdd.name });
    }
  };

  return (
    <FormGroup>
      <Label>
        <FaChalkboardTeacher /> المدرسون
      </Label>
      <SubGrid>
        <StyledSelect
          onChange={handleTeacherSelect}
          value=""
          disabled={isLoading || !availableTeachers}
        >
          <option value="" disabled>
            {isLoading ? "جاري تحميل المدرسين..." : "-- اختر لإضافة مدرّس --"}
          </option>
          {availableTeachers?.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </StyledSelect>
      </SubGrid>
      <ItemsList>
        {fields.map((field, index) => (
          <ItemTag key={field.id}>
            {field.name}
            <RemoveButton type="button" onClick={() => remove(index)}>
              <FaTrash size={12} />
            </RemoveButton>
          </ItemTag>
        ))}
      </ItemsList>
    </FormGroup>
  );
};

export default TeacherSubManager;
