import UpdateHall from "../../features/super-admin-features/super-halls/UpdateHall";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const UpdateHallPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.UPDATE_HALL.title}
        description={
          SUPER_ADMIN_PAGES_PROPERTIES.UPDATE_HALL.description
        }
        button={true}
      />
      <UpdateHall />
    </>
  );
};

export default UpdateHallPage;
