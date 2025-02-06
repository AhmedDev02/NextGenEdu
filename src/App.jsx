// libraries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//pages
import Login from "./general-pages/Login";
import PageNotFound from "./general-pages/PageNotFound";

import News from "./student-pages/News";
import EnrolledMaterials from "./student-pages/EnrolledMaterials";
import Chat from "./student-pages/Chat";
import Discussion from "./student-pages/Discussion";
import Exams from "./student-pages/Exams";
import FinalResults from "./student-pages/FinalResults";
import ProjectsTimeline from "./student-pages/ProjectsTimeline";
import StudentProfile from "./student-pages/StudentProfile";
import StudentProgress from "./student-pages/StudentProgress";
import Tasks from "./student-pages/Tasks";
import WeeklySchedule from "./student-pages/WeeklySchedule";

import AdminDashboard from "./admin-pages/AdminDashboard";
import WeeklyScheduleManagement from "./admin-pages/WeeklyScheduleManagement";
import DiscussionManagement from "./admin-pages/DiscussionManagement";
import FinalResultsManagement from "./admin-pages/FinalResultsManagement";
import MaterialsManagement from "./admin-pages/MaterialsManagement";
import NewsManagement from "./admin-pages/NewsManagement";
import QuizzesManagement from "./admin-pages/QuizzesManagement";
import StudentsManagement from "./admin-pages/StudentsManagement";
import TasksManagement from "./admin-pages/TasksManagement";
import AdminProfile from "./admin-pages/AdminProfile";

// ui
// import Button from "./ui/Button";
// import Post from "./ui/Post";
import StudentAppLayout from "./ui/StudentAppLayout";
import SuperAdminAppLayout from "./ui/SuperAdminAppLayout";
import AdminAppLayout from "./ui/AdminAppLayout";

// styles
import GlobalStyles from "./styles/GlobalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
function App() {
  // const data = {
  //   src: "../public/download.jpeg",
  //   identity: {
  //     name: "أ.د. أحمد المنوفي",
  //     subject: "مادة ال OOP",
  //   },
  //   date: "1/11/2025",
  // };
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          {/* Student */}
          <Route path="/" element={<StudentAppLayout />}>
            <Route index element={<Navigate replace to="news" />} />
            <Route path="news" element={<News />} />
            <Route path="enrolled-materials" element={<EnrolledMaterials />} />
            <Route path="chat" element={<Chat />} />
            <Route path="discussion" element={<Discussion />} />
            <Route path="weekly-schedule" element={<WeeklySchedule />} />
            <Route path="projects-timeline" element={<ProjectsTimeline />} />
            <Route path="exams" element={<Exams />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="student-progress" element={<StudentProgress />} />
            <Route path="final-results" element={<FinalResults />} />
            <Route path="student-profile" element={<StudentProfile />} />
          </Route>

          {/* Admin */}
          <Route element={<AdminAppLayout />}>
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="admin-profile" element={<AdminProfile />} />
            <Route
              path="discussion-management"
              element={<DiscussionManagement />}
            />
            <Route
              path="final-result-management"
              element={<FinalResultsManagement />}
            />
            <Route
              path="materials-management"
              element={<MaterialsManagement />}
            />
            <Route path="news-management" element={<NewsManagement />} />
            <Route path="quizzes-management" element={<QuizzesManagement />} />
            <Route
              path="students-management"
              element={<StudentsManagement />}
            />
            <Route path="tasks-management" element={<TasksManagement />} />
            <Route
              path="weekly-schedule-management"
              element={<WeeklyScheduleManagement />}
            />
          </Route>

          {/* Super Admin */}
          <Route element={<SuperAdminAppLayout />}>
            {/* route */}
            {/* route */}
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />

      {/* <Button variation="danger" size="large">
        login
      </Button>
      <Button
        variation="primary"
        size="custom"
        fontSize="3rem"
        paddingTopBottom="1.3rem"
        paddingLeftRight="12rem"
      >
        login
      </Button>
      <Button
        variation="primary"
        size="custom"
        fontSize="3rem"
        paddingTopBottom="1.3rem"
        paddingLeftRight="12rem"
        isTransparent="true"
      >
        login
      </Button>
      <Post postInformation={data} notice={"أي حد هيتأخر هيتنفخ"}>
        يرجى من جميع الطلاب الكرام الالتزام بحضور المحاضرة القادمة في موعدها
        المحدد، حيث سيتم اتخاذ إجراءات صارمة جدًا ضد أي طالب يتخلف عن الحضور
        بدون عذر مقبول. نعلم أن بعضكم قد يكون مشغولًا أو متعبًا، ولكن دعونا لا
        ننسى أن العلم نور، والغياب ظلام وجهل! ⚡ لذلك، نتوقع منكم جميعًا التواجد
        بكامل التركيز والجدية، وإلا فإن العواقب ستكون أشد قسوة مما تتخيلون!
      </Post> */}
    </QueryClientProvider>
  );
}

export default App;
