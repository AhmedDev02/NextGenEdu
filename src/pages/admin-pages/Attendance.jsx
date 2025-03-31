import AttendanceContent from "../../features/admin-features/material-management/AttendanceContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const Attendance = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.QR_ADMIN.title}
        button={false}
      />
      <AttendanceContent />
    </>
  );
};

export default Attendance;
