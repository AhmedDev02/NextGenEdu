import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

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
