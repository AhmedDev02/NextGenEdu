import ContentHeader from "../../ui/ContentHeader";
import ProjectsTimelineContent from "../../features/student-features/timeline/ProjectsTimelineContent";
import { STUDENT_PAGES_PROPERTIES } from "../../utils/constants";

function ProjectsTimeline() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.TIMELINE.title}
        description={STUDENT_PAGES_PROPERTIES.TIMELINE.description}
        button={false}
      />
      <ProjectsTimelineContent />
    </>
  );
}

export default ProjectsTimeline;
