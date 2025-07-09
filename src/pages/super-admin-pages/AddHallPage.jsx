import CreateHall from "../../features/super-admin-features/super-halls/CreateHall";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const AddHallPage = () => {
  return (
    <>
    <ContentHeader
      title={SUPER_ADMIN_PAGES_PROPERTIES.ADD_HALL.title}
      description={SUPER_ADMIN_PAGES_PROPERTIES.ADD_HALL.description}
      button={true}
    />
    <CreateHall />
  </>
  )
};

export default AddHallPage;
