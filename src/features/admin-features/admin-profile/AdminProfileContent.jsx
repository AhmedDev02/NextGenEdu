import styled from "styled-components";
import AdminProfilePic from "./AdminProfilePic";
import AdminProfileForm from "./AdminProfileForm";
import useGetProfile from "./useGetProfile";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";
import useUpdateProfile from "./useUpdateProfile";
import { useState } from "react";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";
import Empty from "../../../ui/amr/Empty";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  /* width: 1000px; */
  @media (max-width: 1024px) {
    min-width: 100%;
    padding: 40px;
  }
  @media (min-width: 1025px) {
    width: 1000px;
    padding: 40px;
  }

  /* This is for tablets (screens smaller than 768px) */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 40px;
  }
`;
const Header = styled.header`
  text-align: center;
  background-color: var(--color-secondary-darkblue);
  width: 100%;
  padding: 20px 0;
  border-radius: 20px;
`;
const H1 = styled.h1`
  font-size: 2rem;
  color: #fff;
`;

const Breaker = styled.div`
  height: 2px;
  width: 100%;
  background-color: var(--color-secondary-darkblue);
  border-radius: 20px;
`;
const ProfileDataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 90%;

    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  /* This is for tablets (screens smaller than 768px) */
  @media (max-width: 768px) {
    min-width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

function AdminProfileContent() {
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState("");
  const { data: profileInfo, isPending, error, refetch } = useGetProfile();
  const { mutate, isPending: isUpdating } = useUpdateProfile();
  const { setSelectedImage } = useStudentProgressContext();

  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack
        message="حدث خطأ اثناء عرض الملف الشخصي"
        onRetry={refetch}
      />
    );
  }
  if (!profileInfo || profileInfo.data.length === 0) {
    return <Empty resourceName="معلومات" />;
  }
  const { avatar, department, description, email, id, name, type, uni_code } =
    profileInfo.data;

  const handleSavePassword = () => {
    if (isEditing) {
      if (!password) {
        toast.error("الرجاء إدخال كلمة المرور قبل الحفظ");
        return;
      }
      mutate({
        password: password,
      });
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };
  const handleSaveAvatar = (selectedFile) => {
    if (selectedFile) {
      mutate({ avatar: selectedFile });
    } else {
      toast.error("يجب اختيار صوره اولا");
    }
    setSelectedImage(null);
    setIsEditing(false);
  };
  const formInfo = { name, uni_code, email };
  const ProfilePicInfo = { avatar, description, name };
  const updateInfo = {
    password,
    setPassword,
    isEditing,
    setIsEditing,
    handleSavePassword,
  };
  return (
    <Div>
      <Header>
        <H1>المعلومات الأساسية</H1>
      </Header>
      <Breaker />
      <ProfileDataContainer>
        <AdminProfilePic
          isUpdating={isUpdating}
          handleSaveAvatar={handleSaveAvatar}
          ProfilePicInfo={ProfilePicInfo}
        />
        <AdminProfileForm updateInfo={updateInfo} formInfo={formInfo} />
      </ProfileDataContainer>
      <Breaker />
    </Div>
  );
}

export default AdminProfileContent;
