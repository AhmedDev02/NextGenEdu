import TeachersLoginForm from "../../features/auth/TeachersLoginForm";

function TeacherLogin() {
  // 1. User clicks "Forgot Password" → Redirects to /forgot-password.
  // 2️. User enters email → Sends request to backend → Email is sent.
  // 3️. User clicks reset link in email → Redirects to /reset-password?token=XYZ.
  // 4️. User enters a new password → Backend verifies & updates the password.
  // 5️. ✅ Success: Redirects to /password-reset-success.
  // 6️. ❌ If failed (expired/invalid token): Redirects to /password-reset-error.

  return <TeachersLoginForm />;
}

export default TeacherLogin;
