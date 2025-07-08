import AddBuildingContent from "../../features/super-admin-features/super-buildings/AddBuildingContent";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const AddBuildingPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.ADD_BUILDING.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.ADD_BUILDING.description}
        button={true}
      />
      <AddBuildingContent />
    </>
  );
};

export default AddBuildingPage;
