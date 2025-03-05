import ContentHeader from "../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../utils/constants";

function ProjectsTimeline() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.TIMELINE.title}
        description={STUDENT_PAGES_PROPERTIES.TIMELINE.description}
        button={false}
      />
    </>
  );
}

export default ProjectsTimeline;
