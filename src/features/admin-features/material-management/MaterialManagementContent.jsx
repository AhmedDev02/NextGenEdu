import styled from "styled-components";
import MyCard from "../../../ui/amr/MyCard";
import { MdOutlineFileUpload, MdUpdate } from "react-icons/md";
import useGetCourses from "./useGetCourses";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";

const MaterialContainer = styled.div`
  margin: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 7rem;
  flex-wrap: wrap;
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
  const { courses, isPending, error } = useGetCourses();
  if (isPending) return <Spinner />;
  if (error)
    return toast.error("حدث خطأ أثناء تحميل المواد. يرجى المحاولة لاحقًا.");
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
