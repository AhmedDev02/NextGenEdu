import HallDetails from "../../features/super-admin-features/super-halls/HallDetails";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const HallDetailsPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.UPDATE_HALL.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.UPDATE_HALL.description}
        button={true}
      />
      <HallDetails />
    </>
  );
};

export default HallDetailsPage;
