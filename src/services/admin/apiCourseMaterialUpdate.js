import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

// Function to update course material (PUT or PATCH)
export async function updateCourseMaterial(courseId, updatedData, token) {
  if (!token) {
    throw new Error("Token is required");
  }

  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.put(
      `${BASE_URL}/teachers/course-materials/${courseId}`, // Endpoint to update course material
      updatedData, // Send the updated data as the body
      { headers }
    );
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error updating course material:", error.message);
    throw new Error(error.message); // Throw an error if the request fails
  }
}
