import axios from "axios";
import { BASE_URL_NODE } from "../../utils/apiConstant";

// for questions:

export async function getOneQuestion(token, questionID) {
  const nodeHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // If needed
  };
  console.log(token, questionID);
  try {
    const response = await axios.get(
      `${BASE_URL_NODE}/questions/${questionID}`,
      {
        headers: nodeHeaders,
      }
    );
    return response?.data;
  } catch (error) {
    console.log(
      "Error fetching question from the file called api:",
      error.message
    );
    throw error;
  }
}

export const getQuestions = async (token) => {
  const nodeHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // If needed
  };
  console.log(token);

  try {
    const response = await axios.get(`${BASE_URL_NODE}/questions/`, {
      headers: nodeHeaders,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error fetching the Questions:", error.message);
    throw error;
  }
};

export async function addLikeQuestion(questionID, token) {
  if (!token) {
    throw new Error("Token is required");
  }
  console.log(questionID);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  console.log(questionID);
  try {
    const response = await axios.post(
      `${BASE_URL_NODE}/questions/qlike/${questionID}`,
      {},
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error updating course material:",
      error?.response?.data || error
    );
    if (error?.response?.data?.errors) {
      console.log("Validation errors:", error.response.data.errors);
    }
    throw new Error(error?.response?.data?.message || error.message);
  }
}
export async function addLikeAnswer(answerID, token) {
  if (!token) {
    throw new Error("Token is required");
  }
  console.log(token);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  console.log(answerID);
  try {
    const response = await axios.post(
      `${BASE_URL_NODE}/questions/alike/${answerID}`,
      {},
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error updating course material:",
      error?.response?.data || error
    );
    if (error?.response?.data?.errors) {
      console.log("Validation errors:", error.response.data.errors);
    }
    throw new Error(error?.response?.data?.message || error.message);
  }
}

export async function deleteQuestion(questionID, token) {
  if (!token) throw new Error("Token is required");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.delete(
      `${BASE_URL_NODE}/questions/delquestion/${questionID}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting question:", error?.response?.data || error);
    throw new Error(error?.response?.data?.message || error.message);
  }
}

export async function deleteAnswer(answerID, token) {
  if (!token) throw new Error("Token is required");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.delete(
      `${BASE_URL_NODE}/questions/delanswer/${answerID}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting answer:", error?.response?.data || error);
    throw new Error(error?.response?.data?.message || error.message);
  }
}

export async function addQuestion(token, body) {
  if (!token) {
    throw new Error("Token is required");
  }
  console.log(token);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(`${BASE_URL_NODE}/questions/add`, body, {
      headers,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("مشكله في ارسال السؤال:", error?.response?.data || error);
    throw error; // ✅ Re-throw the error so `onError` in the mutation is triggered
  }
}

export async function addAnswer(questionID, token, text) {
  if (!token) {
    throw new Error("Token is required");
  }
  console.log(token);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  console.log();
  try {
    const response = await axios.post(
      `${BASE_URL_NODE}/questions/addanswer/${questionID}`,
      { body: text },
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error updating course material:",
      error?.response?.data || error
    );
    if (error?.response?.data?.errors) {
      console.log("Validation errors:", error.response.data.errors);
    }
    throw new Error(error?.response?.data?.message || error.message);
  }
}
