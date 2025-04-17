import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES} from "../../utils/constants";
import SuperAdminReportsContent from "../../features/super-admin-features/super-report-management/SuperAdminReportsContent"

function SuperAdminReports() {
  return (
    <>
    <ContentHeader
      title={ SUPER_ADMIN_PAGES_PROPERTIES.REOPRT.title}
      description={ SUPER_ADMIN_PAGES_PROPERTIES.REOPRT.description}
      button={false}
    />
    <SuperAdminReportsContent/>
  </>
  )
}

export default SuperAdminReports;



