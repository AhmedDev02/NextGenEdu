// libraries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//pages
import Login from "./pages/general-pages/Login";
import PageNotFound from "./pages/general-pages/PageNotFound";

import News from "./pages/student-pages/News";
import EnrolledMaterials from "./pages/student-pages/EnrolledMaterials";
import Material from "./features/student-features/materials/Material";

import Chat from "./pages/student-pages/Chat";
import Discussion from "./pages/student-pages/Discussion";
import Exams from "./pages/student-pages/Exams";
import FinalResults from "./pages/student-pages/FinalResults";
import ProjectsTimeline from "./pages/student-pages/ProjectsTimeline";
import StudentProfile from "./pages/student-pages/StudentProfile";
import StudentProgress from "./pages/student-pages/StudentProgress";
import Tasks from "./pages/student-pages/Tasks";
import WeeklySchedule from "./pages/student-pages/WeeklySchedule";
import Answers from "./features/student-features/discussion/Answers";
import Exam from "./features/student-features/exams/Exam";
import Examination from "./features/student-features/exams/Examination";
import TaskPage from "./features/student-features/tasks/TaskPage";

import AdminDashboard from "./pages/admin-pages/AdminDashboard";
import WeeklyScheduleManagement from "./pages/admin-pages/WeeklyScheduleManagement";
import DiscussionManagement from "./pages/admin-pages/DiscussionManagement";
import FinalResultsManagement from "./pages/admin-pages/FinalResultsManagement";
import MaterialsManagement from "./pages/admin-pages/MaterialsManagement";
import NewsManagement from "./pages/admin-pages/NewsManagement";
import QuizzesManagement from "./pages/admin-pages/QuizzesManagement";
import StudentsManagement from "./pages/admin-pages/StudentsManagement";
import TasksManagement from "./pages/admin-pages/TasksManagement";
import AdminProfile from "./pages/admin-pages/AdminProfile";

import SuperAdminDashboard from "./pages/super-admin-pages/SuperAdminDashboard";
import SuperAdminProfile from "./pages/super-admin-pages/SuperAdminProfile";
import SuperAdminMaterialsManagement from "./pages/super-admin-pages/SuperAdminMaterialsManagement";
import SuperAdminDepartmentsManagement from "./pages/super-admin-pages/SuperAdminDepartmentsManagement";
import SuperAdminNewsManagement from "./pages/super-admin-pages/SuperAdminNewsManagement";
import SuperAdminNotificationsManagement from "./pages/super-admin-pages/SuperAdminNotificationsManagement";
import SuperAdminReports from "./pages/super-admin-pages/SuperAdminReports";
import SuperAdminSchedulesManagement from "./pages/super-admin-pages/SuperAdminSchedulesManagement";
import SuperAdminUsersManagement from "./pages/super-admin-pages/SuperAdminUsersManagement";

import Forbidden from "./features/auth/Forbidden";
import ForgotPassword from "./features/auth/ForgotPassword";
import ResetPassword from "./features/auth/ResetPassword";
import PasswordResetSuccess from "./features/auth/PasswordResetSuccess";

// ui
import StudentAppLayout from "./ui/StudentAppLayout";
import SuperAdminAppLayout from "./ui/SuperAdminAppLayout";
import AdminAppLayout from "./ui/AdminAppLayout";

// styles
import GlobalStyles from "./styles/GlobalStyles";
import { StudentProgressProvider } from "./context/StudentProgressProvider";
import PasswordResetError from "./features/auth/PasswordResetError";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <StudentProgressProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route
              path="password-reset-success"
              element={<PasswordResetSuccess />}
            />
            <Route
              path="/password-reset-error"
              element={<PasswordResetError />}
            />
            <Route path="*" element={<PageNotFound />} />
            <Route path="403" element={<Forbidden />} />
            {/* Student */}
            <Route path="/" element={<StudentAppLayout />}>
              <Route index element={<Navigate replace to="news" />} />
              <Route path="news" element={<News />} />
              <Route
                path="enrolled-materials"
                element={<EnrolledMaterials />}
              />

              <Route
                path="enrolled-materials/:materialId"
                element={<Material />}
              />

              <Route path="chat" element={<Chat />} />

              <Route path="discussion" element={<Discussion />} />
              <Route path="discussion/:questionId" element={<Answers />} />

              <Route path="weekly-schedule" element={<WeeklySchedule />} />
              <Route path="projects-timeline" element={<ProjectsTimeline />} />

              <Route path="exams" element={<Exams />} />
              <Route path="exams/:examId" element={<Exam />} />

              <Route
                path="exams/:examId/:realExamId"
                element={<Examination />}
              />
              <Route path="tasks" element={<Tasks />} />
              <Route path="tasks/:courseId" element={<TaskPage />} />
              <Route path="student-progress" element={<StudentProgress />} />
              <Route path="final-results" element={<FinalResults />} />
              <Route path="profile" element={<StudentProfile />} />
            </Route>

            {/* Admin */}
            <Route path="/admin" element={<AdminAppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />

              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="discussion" element={<DiscussionManagement />} />
              <Route path="final-result" element={<FinalResultsManagement />} />
              <Route path="materials" element={<MaterialsManagement />} />
              <Route path="news" element={<NewsManagement />} />
              <Route path="quizzes" element={<QuizzesManagement />} />
              <Route path="students" element={<StudentsManagement />} />
              <Route path="tasks" element={<TasksManagement />} />
              <Route
                path="weekly-schedule"
                element={<WeeklyScheduleManagement />}
              />
            </Route>

            {/* Super Admin */}
            <Route path="/super-admin" element={<SuperAdminAppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />

              <Route path="dashboard" index element={<SuperAdminDashboard />} />
              <Route path="profile" element={<SuperAdminProfile />} />
              <Route
                path="departments"
                element={<SuperAdminDepartmentsManagement />}
              />
              <Route
                path="materials"
                element={<SuperAdminMaterialsManagement />}
              />
              <Route
                path="notifications"
                element={<SuperAdminNotificationsManagement />}
              />
              <Route path="reports" element={<SuperAdminReports />} />
              <Route
                path="schedules"
                element={<SuperAdminSchedulesManagement />}
              />
              <Route path="users" element={<SuperAdminUsersManagement />} />
              <Route path="news" element={<SuperAdminNewsManagement />} />
            </Route>
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
      </QueryClientProvider>
    </StudentProgressProvider>
  );
}

export default App;
