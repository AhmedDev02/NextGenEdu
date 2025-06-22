import axios from "axios";
import { BASE_URL_NODE } from "../../utils/apiConstant";

// for questions:

export async function getQuestion(token, materialId) {
  const nodeHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // If needed
  };
  try {
    const response = await axios.get(
      `${BASE_URL_NODE}/course-materials/${materialId}`,
      {
        nodeHeaders,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Materials:", error.message);
    throw error;
  }
}

export const getQuestions = async (token) => {
  const nodeHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // If needed
  };
  try {
    const response = await axios.get(`${BASE_URL_NODE}/questions/`, {
      nodeHeaders,
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching the Materials:", error.message);
    throw error;
  }
};
