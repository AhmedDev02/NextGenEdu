import HallsContent from "../../features/super-admin-features/super-halls/HallsContent";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const SuperAdminHallsPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.HALL.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.HALL.description}
        button={false}
      />
      <HallsContent />
    </>
  );
};

export default SuperAdminHallsPage;
