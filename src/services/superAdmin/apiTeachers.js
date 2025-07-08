import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const getTeachers = async (token, department = "", page) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/teachers?department=${department}&page=${page}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching Teachers:", error.message);
        throw error;
    }
}

export const getOneTeacher = async (token, teacherId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/teachers/${teacherId}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching teacher", error.message);
        throw error;
    }
}

export const deleteTeacher = async (token, teacherId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.delete(`${BASE_URL}/dashboard/teachers/${teacherId}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error Deleting teacher", error.message);
        throw error;
    }
}

export const createTeacher = async (token, data) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.post(`${BASE_URL}/dashboard/teachers`, data, { headers })
        return response.data;
    } catch (error) {
        console.error("Error creating teacher", error.message);
        throw error;
    }
}

export const updateTeacher = async (token, teacherId, updatedData) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.patch(`${BASE_URL}/dashboard/teachers/${teacherId}`, updatedData, { headers })
        return response.data;
    } catch (error) {
        console.error("Error updating teacher", error.message);
        throw error;
    }
}

export const importFileTeachers = async (token, file) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.post(`${BASE_URL}/dashboard/teachers/import`, file, { headers })
        return response.data;
    } catch (error) {
        console.error("Error importing file", error.message);
        throw error;
    }
}
export const exportFileTeachers = async (token) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/teachers/export`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error exporting file", error.message);
        throw error;
    }
}

