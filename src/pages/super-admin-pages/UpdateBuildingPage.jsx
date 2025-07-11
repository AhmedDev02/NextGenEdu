import UpdateBuilding from "../../features/super-admin-features/super-buildings/UpdateBuilding";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const UpdateBuildingPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.UPDATE_BUILDING.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.UPDATE_BUILDING.description}
        button={true}
      />
      <UpdateBuilding />
    </>
  );
};

export default UpdateBuildingPage;
