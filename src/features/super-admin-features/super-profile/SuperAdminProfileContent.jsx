import styled from "styled-components";
import AdminProfilePic from "./SuperAdminProfilePic";
import AdminProfileForm from "./SuperAdminProfileForm";
import useGetProfile from "./useGetProfile";
import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import Empty from "../../../ui/amr/Empty";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";
import { useState } from "react";
import toast from "react-hot-toast";
import useUpdateProfile from "./useUpdateProfile";

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

const SuperAdminProfileContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState("");
  const { setSelectedImage } = useStudentProgressContext();
  const { mutate, isPending: isUpdating } = useUpdateProfile();
  const {
    data: ProfileData,
    isPending: isGettingProfileData,
    error,
    refetch,
  } = useGetProfile();
  if (isGettingProfileData) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack message="خطأ في تحميل الصفحه الشخصيه" onRetry={refetch} />
    );
  }
  if (!ProfileData || ProfileData.data.length === 0) {
    return <Empty resourceName="معلومات" />;
  }
  const { name, email, avatar } = ProfileData.data;
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
      mutate({
        avatar: selectedFile,
      });
    } else {
      toast.error("اختر صورة قبل الحفظ");
    }
    setSelectedImage(null);
    setIsEditing(false);
  };
  const updateFormInfo = {
    password,
    setPassword,
    isEditing,
    setIsEditing,
    handleSavePassword,
  };
  const formInfo = { name, email };
  const profilePicInfo = { name, avatar };

  return (
    <Div>
      <Header>
        <H1>المعلومات الأساسية</H1>
      </Header>
      <Breaker />
      <ProfileDataContainer>
        <AdminProfilePic
          handleSave={handleSaveAvatar}
          profilePicInfo={profilePicInfo}
          isUpdating={isUpdating}
        />
        <AdminProfileForm formInfo={formInfo} updateFormInfo={updateFormInfo} />
      </ProfileDataContainer>
      <Breaker />
    </Div>
  );
};

export default SuperAdminProfileContent;
