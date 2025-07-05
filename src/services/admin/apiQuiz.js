import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export async function createQuiz(data, token) {
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
        const response = await axios.post(
            `${BASE_URL}/teachers/quizzes`,
            data,
            { headers }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating the quiz:", error.response.data);
        throw error;
    }
}

export async function getAllQuizzes(token, status) {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };

    try {
        const response = await axios.get(`${BASE_URL}/teachers/quizzes?status=${status}`, {
            headers,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching Quizzes:", error.message);
        throw error;
    }
}

export async function getOneQuiz(token, quizId) {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };

    try {
        const response = await axios.get(`${BASE_URL}/teachers/quizzes/${quizId}`, {
            headers,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching Quiz:", error.message);
        throw error;
    }
}

export async function getResults(token, quizId) {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };

    try {
        const response = await axios.get(`${BASE_URL}/teachers/quizzes/answers/${quizId}`, {
            headers,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching Results:", error.message);
        throw error;
    }
}

export async function getStudentAnswers(token, quizId, studentId) {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };

    try {
        const response = await axios.get(`${BASE_URL}/teachers/quizzes/answers/${quizId}/${studentId}`, {
            headers,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching Student Results:", error.message);
        throw error;
    }
}
export async function deleteQuiz(token, quizId) {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };

    try {
        const response = await axios.delete(`${BASE_URL}/teachers/quizzes/${quizId}`, {
            headers,
        });
        return response.data;
    } catch (error) {
        console.error("Error happened while deleting this quiz:", error.message);
        throw error;
    }
}

export async function updateQuiz(quizId, updatedData, token) {
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
            `${BASE_URL}/teachers/quizzes/${quizId}`,
            updatedData,
            { headers }
        );
        return response.data;
    } catch (error) {
        console.log("Error updating ", error.response.data);
        throw error;
    }
}