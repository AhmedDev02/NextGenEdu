import BuildingDetails from "../../features/super-admin-features/super-buildings/BuildingDetails";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const BuildingDetailsPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.DEPARTMENT.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.DEPARTMENT.description}
        button={true}
      />
      <BuildingDetails />
    </>
  );
};

export default BuildingDetailsPage;
