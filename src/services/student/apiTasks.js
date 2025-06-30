import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const getCourses = async (token) => {
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
        console.error("Error fetching table:", error.message);
        throw error;
    }
}

export const getAssignment = async (token, courseId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(
            `${BASE_URL}/assignments?course=${courseId}`,
            { headers }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching table:", error.message);
        throw error;
    }
}

export const uploadSolution = async (token, AssId, uploadedSolution) => {
    if (!token) {
        throw new Error("Token is required");
    }
    const headers = {
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
        // Do NOT set "Content-Type" here for FormData!
    };
    try {
        const response = await axios.post(
            `${BASE_URL}/assignments/${AssId}/submit`,
            uploadedSolution,
            { headers }
        );
        return response.data ?? {};
    } catch (error) {
        console.error("Error uploading the solution:", error);
        throw error;
    }
}

export const apiShowAssignment = async (assignmentId, token) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/assignments/${assignmentId}`, {
            headers
        })
        return response.data;
    } catch (error) {
        console.error("Error fetching assignment:", error.message);
        return null;
    }
}