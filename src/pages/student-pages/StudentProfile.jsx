import ContentHeader from "../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../utils/constants";
import ProfileContent from "../../features/student-features//profile/ProfileContent";

function StudentProfile() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.PROFILE.title}
        description={STUDENT_PAGES_PROPERTIES.PROFILE.description}
        button={false}
      />
      <ProfileContent />
    </>
  );
}

export default StudentProfile;
