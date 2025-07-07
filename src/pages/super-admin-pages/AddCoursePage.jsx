import AddCourse from "../../features/super-admin-features/super-material-management/AddCourse";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const AddCoursePage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.ADD_MATERIAL.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.ADD_MATERIAL.description}
        button={true}
      />
      <AddCourse />
    </>
  );
};

export default AddCoursePage;
