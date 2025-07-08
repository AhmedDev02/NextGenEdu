// libraries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//pages
import TeacherLogin from "./pages/general-pages/TeacherLogin";
import StudentLogin from "./pages/general-pages/StudentLogin";

import PageNotFound from "./pages/general-pages/PageNotFound";

import News from "./pages/student-pages/News";
import EnrolledMaterials from "./pages/student-pages/EnrolledMaterials";
import Material from "./features/student-features/materials/Material";

import Discussion from "./pages/student-pages/Discussion";
import Exams from "./pages/student-pages/Exams";
import FinalResults from "./pages/student-pages/FinalResults";
import ProjectsTimeline from "./pages/student-pages/ProjectsTimeline";
import StudentProfile from "./pages/student-pages/StudentProfile";
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
import CreateQuiz from "./pages/admin-pages/CreateQuiz";
import LastQuiz from "./pages/admin-pages/LastQuiz";
import ScheduledQuiz from "./pages/admin-pages/ScheduledQuiz";
import TasksResults from "./pages/admin-pages/TasksResults";

import SuperAdminDashboard from "./pages/super-admin-pages/SuperAdminDashboard";
import SuperAdminProfile from "./pages/super-admin-pages/SuperAdminProfile";
import SuperAdminMaterialsManagement from "./pages/super-admin-pages/SuperAdminMaterialsManagement";
import SuperAdminDepartmentsManagement from "./pages/super-admin-pages/SuperAdminDepartmentsManagement";
import SuperAdminNewsManagement from "./pages/super-admin-pages/SuperAdminNewsManagement";
import SuperAdminNotificationsManagement from "./pages/super-admin-pages/SuperAdminNotificationsManagement";
import SuperAdminReports from "./pages/super-admin-pages/SuperAdminReports";
import SuperAdminSchedulesManagement from "./pages/super-admin-pages/SuperAdminSchedulesManagement";

import Forbidden from "./features/auth/Forbidden";
import ForgotPassword from "./features/auth/ForgotPassword";
import ResetPassword from "./features/auth/ResetPassword";
import PasswordResetSuccess from "./features/auth/PasswordResetSuccess";

// ui
import StudentAppLayout from "./ui/StudentAppLayout";
import SuperAdminAppLayout from "./ui/SuperAdminAppLayout";
import AdminAppLayout from "./ui/AdminAppLayout";

// styles
// import GlobalStyles from "./styles/GlobalStyles";
import { StudentProgressProvider } from "./context/StudentProgressProvider";
import PasswordResetError from "./features/auth/PasswordResetError";
import Curriculum from "./features/admin-features/dashboard/Curriculum";
import AddMaterial from "./pages/admin-pages/AddMaterial";
import Attendance from "./pages/admin-pages/ShowMaterials";
import CreateTasks from "./pages/admin-pages/CreateTasks";
import ScheduledTasks from "./pages/admin-pages/ScheduledTasks";
import LastTasks from "./pages/admin-pages/LastTasks";
import AddNews from "./features/admin-features/news-management/AddNews";
import Protector from "./pages/general-pages/Protector";
import StudentProtector from "./pages/general-pages/StudentProtector";

import SubSuperAdminAppLayout from "./ui/SubSuperAdminAppLayout";
import SubSuperAdminProfile from "./pages/sub-super-admin-pages/SubSuperAdminProfile";
import SubSuperAdminDashboard from "./pages/sub-super-admin-pages/SubSuperAdminDashboard";
import SubSuperAdminUsersManagement from "./pages/sub-super-admin-pages/SubSuperAdminUsersManagement";
import QuizDetailsPage from "./pages/admin-pages/QuizDetailsPage";
import QuizResultPage from "./pages/admin-pages/QuizResultPage";
import StudentAnswersPage from "./pages/admin-pages/StudentAnswersPage";
import EditQuizPage from "./pages/admin-pages/EditQuizPage";
import MaintenancePage from "./pages/general-pages/MaintenancePage";
import EditDepartmentPage from "./pages/super-admin-pages/EditDepartmentPage";
import AddDepartmentPage from "./pages/super-admin-pages/AddDepartmentPage";
import CourseDetailsPage from "./pages/super-admin-pages/CourseDetailsPage";
import AddCoursePage from "./pages/super-admin-pages/AddCoursePage";
import EditCourse from "./pages/super-admin-pages/EditCourse";
import SuperStudentManagementPage from "./pages/super-admin-pages/SuperStudentManagementPage";
import SuperTeacherManagementPage from "./pages/super-admin-pages/SuperTeacherManagementPage";
import EditStudentPage from "./pages/super-admin-pages/EditStudentPage";
import CreateStudentPage from "./pages/super-admin-pages/CreateStudentPage";
import EditTeacherPage from "./pages/super-admin-pages/EditTeacherPage";
import CreateTeacherPage from "./pages/super-admin-pages/CreateTeacherPage";

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
        {/* <GlobalStyles /> */}
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path="students/login" element={<StudentLogin />} />
            <Route path="teachers/login" element={<TeacherLogin />} />

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
            <Route
              path="/"
              element={
                <StudentProtector>
                  <StudentAppLayout />
                </StudentProtector>
              }
            >
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

              {/* <Route path="chat" element={<Chat />} /> */}
              <Route path="chat" element={<MaintenancePage />} />

              <Route path="discussion" element={<Discussion />} />
              <Route path="discussion/:questionID" element={<Answers />} />

              <Route path="weekly-schedule" element={<WeeklySchedule />} />
              <Route path="projects-timeline" element={<ProjectsTimeline />} />

              <Route path="exams" element={<Exams />} />
              {/* <Route path="exams" element={<MaintenancePage />} /> */}
              <Route path="exams/:examId" element={<Exam />} />

              <Route
                path="exams/:examId/:realExamId"
                element={<Examination />}
              />
              <Route path="tasks" element={<Tasks />} />
              <Route path="tasks/:courseId" element={<TaskPage />} />

              {/* <Route path="student-progress" element={<StudentProgress />} /> */}
              <Route path="student-progress" element={<MaintenancePage />} />

              <Route path="final-results" element={<FinalResults />} />
              <Route path="profile" element={<StudentProfile />} />
            </Route>

            {/* Admin */}
            <Route
              path="/admin"
              element={
                <Protector>
                  <AdminAppLayout />
                </Protector>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />

              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="dashboard/:curriculumId" element={<Curriculum />} />

              <Route path="profile" element={<AdminProfile />} />
              <Route path="discussion" element={<DiscussionManagement />} />
              {/* <Route path="discussion" element={<MaintenancePage />} /> */}

              <Route path="final-result" element={<FinalResultsManagement />} />
              <Route path="materials" element={<MaterialsManagement />} />
              <Route
                path="materials/add-materials/:id"
                element={<AddMaterial />}
              />
              <Route
                path="materials/show-materials/:id"
                element={<Attendance />}
              />
              <Route path="news" element={<NewsManagement />} />
              <Route path="news/add" element={<AddNews />} />

              <Route path="quizzes" element={<QuizzesManagement />} />
              {/* <Route path="quizzes" element={<MaintenancePage />} /> */}

              <Route
                path="quizzes/create-quizzes/:id"
                element={<CreateQuiz />}
              />

              <Route
                path="quizzes/scheduled-quizzes/:id"
                element={<ScheduledQuiz />}
              />
              <Route
                path="quizzes/scheduled-quizzes/:id/edit-quiz/:quizId"
                element={<EditQuizPage />}
              />
              <Route
                path="quizzes/old-quizzes/:id/results/:quizId"
                element={<QuizResultPage />}
              />
              <Route
                path="quizzes/old-quizzes/:id/results/:quizId/:studentId"
                element={<StudentAnswersPage />}
              />
              <Route
                path="quizzes/scheduled-quizzes/:id/quiz-details/:quizId"
                element={<QuizDetailsPage />}
              />
              <Route path="quizzes/old-quizzes/:id" element={<LastQuiz />} />
              <Route path="students" element={<StudentsManagement />} />
              <Route path="tasks" element={<TasksManagement />} />
              <Route
                path="tasks/create-tasks/:taskId"
                element={<CreateTasks />}
              />
              <Route
                path="tasks/scheduled-tasks/:taskId"
                element={<ScheduledTasks />}
              />
              <Route path="tasks/old-tasks/:taskId" element={<LastTasks />} />
              <Route
                path="tasks/old-tasks/1/results"
                element={<TasksResults />}
              />
              <Route
                path="weekly-schedule"
                element={<WeeklyScheduleManagement />}
              />
            </Route>

            {/* Super Admin */}
            <Route
              path="/super-admin"
              element={
                <Protector>
                  <SuperAdminAppLayout />
                </Protector>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />

              <Route path="dashboard" index element={<SuperAdminDashboard />} />
              <Route path="profile" element={<SuperAdminProfile />} />
              <Route
                path="departments"
                element={<SuperAdminDepartmentsManagement />}
              />
              <Route
                path="departments/add-department"
                element={<AddDepartmentPage />}
              />
              <Route
                path="departments/edit-department/:departmentId"
                element={<EditDepartmentPage />}
              />
              <Route
                path="materials"
                element={<SuperAdminMaterialsManagement />}
              />
              <Route
                path="materials/course-details-display/:courseId"
                element={<CourseDetailsPage />}
              />
              <Route
                path="materials/update-course/:courseId"
                element={<EditCourse />}
              />
              <Route path="materials/add-course" element={<AddCoursePage />} />
              <Route
                path="notifications"
                element={<SuperAdminNotificationsManagement />}
              />
              <Route path="reports" element={<SuperAdminReports />} />
              <Route
                path="schedules"
                element={<SuperAdminSchedulesManagement />}
              />
              <Route path="students" element={<SuperStudentManagementPage />} />
              <Route
                path="students/edit-student/:studentId"
                element={<EditStudentPage />}
              />
              <Route
                path="students/create-student"
                element={<CreateStudentPage />}
              />

              <Route path="teachers" element={<SuperTeacherManagementPage />} />
              <Route
                path="teachers/edit-teacher/:teacherId"
                element={<EditTeacherPage />}
              />
              <Route
                path="teachers/create-teacher"
                element={<CreateTeacherPage />}
              />
              <Route path="news" element={<SuperAdminNewsManagement />} />
            </Route>
            <Route
              path="/sub-super-admin"
              element={
                <Protector>
                  <SubSuperAdminAppLayout />
                </Protector>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />

              <Route
                path="dashboard"
                index
                element={<SubSuperAdminDashboard />}
              />
              <Route path="profile" element={<SubSuperAdminProfile />} />

              <Route path="users" element={<SubSuperAdminUsersManagement />} />
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
              direction: "rtl",
            },
          }}
        />
      </QueryClientProvider>
    </StudentProgressProvider>
  );
}

export default App;
