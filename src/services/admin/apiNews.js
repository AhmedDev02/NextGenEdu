import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export async function updateAnnouncement(announcementId, updatedData, token) {
  if (!token) {
    throw new Error("Token is required");
  }

  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };

  console.log(announcementId, updatedData);
  try {
    const response = await axios.put(
      `${BASE_URL}/dashboard/announcements/${announcementId}`, // Endpoint to update course material
      updatedData, // Send the updated data as the body
      { headers }
    );
    return response.data; // Return the response data
  } catch (error) {
    console.log("Error updating ", error.response.data.errors);
    throw new Error(error.message); // Throw an error if the request fails
  }
}

export async function deleteAnnouncement(id, token) {
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
      `${BASE_URL}/dashboard/announcements/${id}`, // Endpoint to update course material
      { headers }
    );
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error updating course material:", error.message);
    throw new Error(error.message); // Throw an error if the request fails
  }
}

export async function createAnnouncement(data, token) {
  if (!token) {
    throw new Error("Token is required");
  }

  const headers = {
    "Content-Type": "multipart/form-data",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };
  console.log(data);
  try {
    const response = await axios.post(
      `${BASE_URL}/dashboard/announcements`, // Endpoint to update course material
      data, // Send the updated data as the body
      { headers }
    );
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error updating course material:", error.message);
    throw new Error(error.message); // Throw an error if the request fails
  }
}

export async function getAnnouncement(token) {
  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(`${BASE_URL}/dashboard/announcements`, {
      headers,
    });
    console.log("Courses data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error.message);
    return null;
  }
}
