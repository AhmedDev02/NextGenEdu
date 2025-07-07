import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const getStudents = async (token, department, semester) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/students?department=${department}&semester=${semester}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching students:", error.message);
        throw error;
    }
}

export const deleteStudent = async (token, studentId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.delete(`${BASE_URL}/dashboard/students/${studentId}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error Deleting student:", error.message);
        throw error;
    }
}