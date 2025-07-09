import UpdateHall from "../../features/super-admin-features/super-halls/UpdateHall";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const UpdateHallPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.TEACHERS_MANAGEMENT.title}
        description={
          SUPER_ADMIN_PAGES_PROPERTIES.TEACHERS_MANAGEMENT.description
        }
        button={true}
      />
      <UpdateHall />
    </>
  );
};

export default UpdateHallPage;
