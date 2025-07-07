import EditCourseContent from "../../features/super-admin-features/super-material-management/EditCourseContent";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const EditCourse = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.EDIT_COURSE.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.EDIT_COURSE.description}
        button={true}
      />
      <EditCourseContent />
    </>
  );
};

export default EditCourse;
