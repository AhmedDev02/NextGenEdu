import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const getDepartments = async (token) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/department`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching Departments:", error.message);
        throw error;
    }
}

export const getDepartment = async (token, departmentId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/department/${departmentId}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching Departments:", error.message);
        throw error;
    }
}

export const updateDepartment = async (token, departmentId, updatedData) => {
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
        const response = await axios.patch(
            `${BASE_URL}/dashboard/department/${departmentId}/`,
            updatedData,
            { headers }
        );
        return response.data;
    } catch (error) {
        console.error("Error updating lecture status:", error.response.data);
        throw error
    }
}

export async function createDepartment(newDepartment, token) {
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
            `${BASE_URL}/dashboard/department`,
            newDepartment,
            { headers }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating the department:", error.response.data);
        throw error;
    }
}


export async function deleteDepartment(token, departmentId) {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };

    try {
        const response = await axios.delete(`${BASE_URL}/dashboard/department/${departmentId}`, {
            headers,
        });
        return response.data;
    } catch (error) {
        console.error("Error happened while deleting this department:", error.message);
        throw error;
    }
}