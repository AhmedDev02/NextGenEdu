import CourseDisplayPage from "../../features/super-admin-features/super-material-management/CourseDisplayPage";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const CourseDetailsPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.COURSE_DETAILS.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.COURSE_DETAILS.description}
        button={true}
      />
      <CourseDisplayPage />
    </>
  );
};

export default CourseDetailsPage;
