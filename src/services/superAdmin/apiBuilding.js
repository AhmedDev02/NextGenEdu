import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const getBuildings = async (token) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/building`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching buildings:", error.message);
        throw error;
    }
}

export const getOneBuildings = async (token, buildingId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/building/${buildingId}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching building:", error.message);
        throw error;
    }
}
export const deleteBuilding = async (token, buildingId) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.delete(`${BASE_URL}/dashboard/building/${buildingId}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error deleting building:", error.message);
        throw error;
    }
}
export const createBuilding = async (token, data) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.post(`${BASE_URL}/dashboard/building`, data, { headers })
        return response.data;
    } catch (error) {
        console.error("Error creating building:", error.message);
        throw error;
    }
}