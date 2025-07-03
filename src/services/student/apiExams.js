import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const getQuizzes = async (token) => {
  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(`${BASE_URL}/quizzes`, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching table:", error.message);
    throw error;
  }
};

export const startQuiz = async (token, examId) => {
  console.log(examId);
  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(`${BASE_URL}/quizzes/${examId}/start`, {
      headers,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching table:", error.message);
    throw error;
  }
};

export const submitAnswers = async ({ answers, quizId, token }) => {
  const formData = new FormData();
  console.log(answers);
  answers?.forEach((item, index) => {
    formData.append(`questions[${index}][question]`, item.question);
    formData.append(`questions[${index}][answer]`, item.answer);
  });

  const response = await axios.post(
    `${BASE_URL}/quizzes/${quizId}/submit`,
    formData,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
