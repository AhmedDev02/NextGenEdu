import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export async function updateAssignment(assignmentId, updatedData, token) {
  if (!token) {
    throw new Error("Token is required");
  }

  const headers = {
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.put(
      `${BASE_URL}/teachers/assignments/${assignmentId}`, // Endpoint to update course material
      Object.fromEntries(updatedData), // Send the updated data as the body
      { headers }
    );
    return response.data; // Return the response data
  } catch (error) {
    console.log(error.response.data.errors);
    console.error("Error updating:", error);
    throw new Error(error.message); // Throw an error if the request fails
  }
}

export async function deleteAssignment(id, token) {
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
      `${BASE_URL}/teachers/assignments/${id}`, // Endpoint to update course material
      { headers }
    );
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error updating course material:", error.message);
    throw new Error(error.message); // Throw an error if the request fails
  }
}

export async function createAssignment(data, token) {
  if (!token) {
    throw new Error("Token is required");
  }

  const headers = {
    // "Content-Type": "multipart/form-data",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/teachers/assignments`, // Endpoint to update course material
      data, // Send the updated data as the body
      { headers }
    );
    return response.data; // Return the response data
  } catch (error) {
    console.log("Error updating course material:", error.response.data.errors);
    throw new Error(error.message); // Throw an error if the request fails
  }
}

export async function getSingleAssignment(assignmentId) {
  const response = await axios.get(
    `${BASE_URL}/teachers/assignment/${assignmentId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch material");
  }
  const data = await response.json();

  const material = data.find((item) => item.id === String(assignmentId));

  return material || null;
}

export async function getAllAssignments(token) {
  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(`${BASE_URL}/teachers/assignments`, {
      headers,
    });
    console.log("Courses data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error.message);
    return null;
  }
}
