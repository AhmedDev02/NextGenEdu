import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";
import toast from "react-hot-toast";

export async function getCourse(courseId) {
  const response = await axios.get(`${BASE_URL}/teachers/courses`);

  if (!response.ok) {
    throw new Error("Failed to fetch material");
  }
  const data = await response.json();

  const material = data.find((item) => item.id === String(courseId));

  return material || null;
}

export async function getCourses(token) {
  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(`${BASE_URL}/teachers/courses`, {
      headers,
    });
    console.log("Courses data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error.message);
    return null;
  }
}

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

export async function getMaterial({ queryKey }) {
  const [_key, { token, materialId }] = queryKey;
  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/teachers/course-materials/${materialId}`,
      { headers }
    );

    // Checking the response status code (status code 200 means success)
    if (response.status !== 200) {
      toast.error(
        "حدث خطأ أثناء تحميل البيانات، يرجى المحاولة مرة أخرى لاحقًا."
      );
    }
    // Return the fetched data
    return response.data;
  } catch (error) {
    console.error("Error fetching material: ", error);
  }

  return null; // Return null if there was an error
}

export async function deleteCourseMaterial(id, token) {
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
    const response = await axios.delete(
      `${BASE_URL}/teachers/course-materials/${id}`, // Endpoint to update course material
      { headers }
    );
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error updating course material:", error.message);
    throw new Error(error.message); // Throw an error if the request fails
  }
}

export async function addCourseMaterial(courseId, data, token) {
  if (!token) {
    throw new Error("Token is required");
  }

  const headers = {
    "Content-Type": "multipart/form-data",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/teachers/course-materials/${courseId}`, // Endpoint to update course material
      data, // Send the updated data as the body
      { headers }
    );
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error updating course material:", error.message);
    throw new Error(error.message); // Throw an error if the request fails
  }
}
