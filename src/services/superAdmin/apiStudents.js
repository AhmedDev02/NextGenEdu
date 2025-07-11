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
export const getOneStudent = async (token, studentId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/students/${studentId}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching student:", error.message);
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

export const createStudent = async (token, data) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.post(`${BASE_URL}/dashboard/students`, data, { headers })
        return response.data;
    } catch (error) {
        console.error("Error creating student:", error.message);
        throw error;
    }
}

export const updateStudent = async (token, studentId, updatedData) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.patch(`${BASE_URL}/dashboard/students/${studentId}`, updatedData, { headers })
        return response.data;
    } catch (error) {
        console.error("Error updating student:", error.message);
        throw error;
    }
}

export const importFileStudent = async (token, file) => {
    const headers = {
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
        "Accept": "application/json"
    };
    try {
        const response = await axios.post(`${BASE_URL}/dashboard/students/import`, file, { headers });
        return response.data;
    } catch (error) {
        console.error("Error importing file:", error.message);
        if (error.response) {
            console.error("Error response:", error.response.data);
        }
        throw error;
    }
};


export const exportFileStudent = async (token) => {
    const headers = {
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/students/export`, {
            headers,
            responseType: 'blob',
        });
        return response.data;
    } catch (error) {
        console.error("Error exporting file:", error.message);
        throw error;
    }
};