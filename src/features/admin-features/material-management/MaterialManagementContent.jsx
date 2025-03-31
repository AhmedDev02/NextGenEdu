import styled from "styled-components";
import courses from "./courses.js";
import MyCard from "../../../ui/amr/MyCard";
import { IoQrCodeSharp } from "react-icons/io5";
import { MdOutlineFileUpload, MdUpdate } from "react-icons/md";
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
    label: "تسجيل حضور  `QR` ",
    logo: <IoQrCodeSharp />,
    variation: "primary",
    state: "page",
    path: "materials/qr-attendance",
  },
  {
    label: "اضافة مواد دراسيه",
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
  return (
    <MaterialContainer>
      {courses.map((element, index) => (
        <MyCard key={index} data={element} buttonsContent={buttonsContent} />
      ))}
    </MaterialContainer>
  );
};

export default MaterialManagementContent;
