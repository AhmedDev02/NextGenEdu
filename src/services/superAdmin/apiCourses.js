import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const getCourses = async (token, department, semester) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/courses?department=${department}&semester=${semester}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching courses:", error.message);
        throw error;
    }
}
export const getOneCourse = async (token, courseId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/courses/${courseId}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching this course:", error.message);
        throw error;
    }
}

export const createCourse = async (token, data) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.post(
            `${BASE_URL}/dashboard/courses`,
            data,
            { headers }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating the course:", error.response.data);
        throw error;
    }
}

export const updateCourse = async (token, courseId, updatedData) => {
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
            `${BASE_URL}/dashboard/courses/${courseId}/`,
            updatedData,
            { headers }
        );
        return response.data;
    } catch (error) {
        console.error("Error updating this course:", error.response.data);
        throw error
    }
}


export const deleteCourse = async (token, courseId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.delete(`${BASE_URL}/dashboard/courses/${courseId}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error deleting this course:", error.message);
        throw error;
    }
}