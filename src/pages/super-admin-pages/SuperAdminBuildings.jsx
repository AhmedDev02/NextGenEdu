import BuildingsContent from "../../features/super-admin-features/super-buildings/BuildingsContent";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const SuperAdminBuildings = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.BUILDINGS.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.BUILDINGS.description}
        button={false}
      />
      <BuildingsContent />
    </>
  );
};

export default SuperAdminBuildings;
