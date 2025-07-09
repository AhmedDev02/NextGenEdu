import HallDetails from "../../features/super-admin-features/super-halls/HallDetails";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const HallDetailsPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.HALL_DETAILS.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.HALL_DETAILS.description}
        button={true}
      />
      <HallDetails />
    </>
  );
};

export default HallDetailsPage;
