import styled from "styled-components";
import MyCard from "../../../ui/amr/MyCard";
import { FaHourglassEnd, FaPlus } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import useGetCourses from "../material-management/useGetCourses";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";

const Container = styled.div`
  margin: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 7rem;
  flex-wrap: wrap;
`;

const buttonsContent = [
  {
    label: "انشاء واجبات",
    logo: <FaPlus />,
    variation: "primary",
    state: "page",
    path: "tasks/create-tasks",
  },
  {
    label: "واجبات مجدوله",
    logo: <LuClock3 />,
    variation: "primary",
    state: "page",
    path: "tasks/scheduled-tasks",
  },
  {
    label: "واجبات سابقه",
    logo: <FaHourglassEnd />,
    variation: "danger",
    state: "page",
    path: "tasks/old-tasks",
  },
];
const TasksManagementContent = () => {
  const { courses, isPending, error } = useGetCourses();
  if (isPending) return <Spinner />;
  if (error) return toast.error("خطا في عرض الواجبات");
  return (
    <Container>
      {courses.data.map((element) => (
        <MyCard
          key={element.id}
          data={element}
          buttonsContent={buttonsContent}
        />
      ))}
    </Container>
  );
};

export default TasksManagementContent;
