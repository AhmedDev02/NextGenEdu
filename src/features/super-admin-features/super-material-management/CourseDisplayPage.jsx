import { useParams } from "react-router-dom";
import Spinner from "../../../ui/amr/Spinner";
import CourseDisplay from "./CourseDisplay";
import styled from "styled-components";
import useGetOneCourse from "./useGetOneCourse";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`;

const CourseDisplayPage = () => {
  const { courseId } = useParams();

  const { course, isPending, error, refetch } = useGetOneCourse(courseId);

  if (isPending) return <Spinner />;

  if (error) {
    return (
      <ErrorFallBack
        message={error.message || "خطأ في عرض المادة"}
        onRetry={refetch}
      />
    );
  }
  return (
    <PageContainer>
      <CourseDisplay course={course} />
    </PageContainer>
  );
};

export default CourseDisplayPage;
