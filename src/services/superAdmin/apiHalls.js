import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const getHalls = async (token, buildingId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/building/${buildingId}/halls`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching halls:", error.message);
        throw error;
    }
}

export const getOneHall = async (token, hallId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/building/halls/${hallId}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching hall:", error.message);
        throw error;
    }
}
export const deleteHall = async (token, hallId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.delete(`${BASE_URL}/dashboard/building/halls/${hallId}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error deleting hall:", error.message);
        throw error;
    }
}
export const updateHall = async (token, hallId, updatedData) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.patch(`${BASE_URL}/dashboard/building/halls/${hallId}`, updatedData, { headers })
        return response.data;
    } catch (error) {
        console.error("Error updating hall:", error.message);
        throw error;
    }
}
export const createHall = async (token, data) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.post(`${BASE_URL}/dashboard/building/halls`, data, { headers })
        return response.data;
    } catch (error) {
        console.error("Error creating hall:", error.message);
        throw error;
    }
}