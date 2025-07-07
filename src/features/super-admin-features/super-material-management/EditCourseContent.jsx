import { useNavigate, useParams } from "react-router-dom";
import useUpdateCourse from "./useUpdateCourse";
import CourseForm from "./CourseForm";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";
import useGetOneCourse from "./useGetOneCourse";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import { useQueryClient } from "@tanstack/react-query";

const EditCourseContent = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { course, isPending, error, refetch } = useGetOneCourse(courseId);
  const queryClient = useQueryClient();

  const { mutate: updateCourse, isPending: isUpdating } = useUpdateCourse();
  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack
        message={error.message || "خطأ في عرض المواد الدراسية"}
        onRetry={refetch}
      />
    );
  }
  const handleUpdateSubmit = (data) => {
    const formattedData = {
      name: data.name,
      code: data.code,
      description: data.description,
      details: data.details.map((detail) => ({
        department: detail.department,
        semester: detail.semester,
        teachers: detail.teachers.map((teacher) => teacher.id),
      })),
    };
    updateCourse(
      { courseId, updatedData: formattedData },
      {
        onSuccess: () => {
          toast.success("تم تحديث المادة بنجاح");
          queryClient.invalidateQueries(["course", courseId]);
        },
        onError: (err) => {
          toast.error(err.response?.data?.message || "فشل تحديث المادة");
        },
      }
    );
  };

  return (
    <CourseForm
      courseToEdit={course}
      onSubmit={handleUpdateSubmit}
      isLoading={isUpdating}
      onCancel={() =>
        navigate(`/super-admin/materials/course-details-display/${courseId}`)
      }
    />
  );
};

export default EditCourseContent;
