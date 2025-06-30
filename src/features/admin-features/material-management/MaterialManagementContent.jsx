import styled from "styled-components";
import MyCard from "../../../ui/amr/MyCard";
import { MdOutlineFileUpload, MdUpdate } from "react-icons/md";
import useGetCourses from "./useGetCourses";
import Spinner from "../../../ui/amr/Spinner";
import { FaEye } from "react-icons/fa";
import Empty from "../../../ui/amr/Empty";
import ErrorFallback from "../../../ui/amr/ErrorFallBack";

const MaterialContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 2rem;
  }
`;

const buttonsContent = [
  {
    label: "رؤية المواد الدراسية",
    logo: <FaEye />,
    variation: "primary",
    state: "page",
    path: "materials/show-materials",
  },
  {
    label: "اضافة المواد دراسيه",
    logo: <MdOutlineFileUpload />,
    variation: "primary",
    state: "page",
    path: "materials/add-materials",
  },
  {
    label: "تحديث حالة المحاضرة",
    logo: <MdUpdate />,
    variation: "danger",
    state: "modal",
  },
];

const MaterialManagementContent = () => {
  const { courses, isPending, error, refetch } = useGetCourses();

  if (isPending) return <Spinner />;

  if (error) {
    return <ErrorFallback message="خطأ في تحميل المواد" onRetry={refetch} />;
  }

  if (!courses || courses.data.length === 0) {
    return <Empty resourceName="مواد دراسية" />;
  }

  return (
    <MaterialContainer>
      {courses?.data?.map((element) => (
        <MyCard
          key={element.id}
          data={element}
          buttonsContent={buttonsContent}
        />
      ))}
    </MaterialContainer>
  );
};

export default MaterialManagementContent;
