import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export async function getMaterial(token, materialId) {
  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(`${BASE_URL}/course-materials/${materialId}`, {
      headers
    })
    return response.data
  } catch (error) {
    console.error("Error fetching Materials:", error.message);
    throw error;
  }
}

export const getMaterials = async (token) => {
  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(`${BASE_URL}/courses`, {
      headers
    })
    return response.data
  } catch (error) {
    console.error("Error fetching the Materials:", error.message);
    throw error;
  }
}
