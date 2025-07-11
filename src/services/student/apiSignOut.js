import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export async function signOut(token, teacher) {
  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest", // Custom headers are fine if backend expects them
    "X-Device-Type": "web", // Custom headers are fine if backend expects them
    Authorization: `Bearer ${token}`,
  };

  let url;

  try {
    switch (teacher) {
      case "Student":
        url = `${BASE_URL}/logout`;
        break;
      case "Teacher":
        url = `${BASE_URL}/teachers/logout`;
        break;
      default:
        url = `${BASE_URL}/dashboard/logout`;

        break;
    }

    console.log(url);
    const response = await axios.delete(url, {
      headers: headers, // Pass your headers directly in the config object
    });

    console.log("Sign out successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Sign out error:", error);

    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
      throw new Error(
        `Logout failed: ${error.response.status} - ${
          error.response.data.message ||
          error.response.statusText ||
          "Unknown error"
        }`
      );
    } else if (error.request) {
      console.error("Error request:", error.request);
      throw new Error("Logout failed: No response received from server.");
    } else {
      console.error("Error message:", error.message);
      throw new Error(`Logout failed: ${error.message}`);
    }
  }
}
