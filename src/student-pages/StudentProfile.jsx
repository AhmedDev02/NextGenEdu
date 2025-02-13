import ContentHeader from "../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../utils/constants";

function StudentProfile() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.PROFILE.title}
        description={STUDENT_PAGES_PROPERTIES.PROFILE.description}
        button={false}
      />
    </>
  );
}

export default StudentProfile;
