import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const getSuperAdminProfile = async (token) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/profile`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching super admin profile:", error.message);
        throw error;
    }
}

export const updateSuperAdminProfile = async (password, avatar, token) => {
    if (!token) throw new Error("Token is required");
    const formData = new FormData();
    if (password) formData.append("password", password);

    if (avatar instanceof File) {
        formData.append("avatar", avatar);
    }
    const headers = {
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.post(`${BASE_URL}/dashboard/update`, formData, {
            headers,
        });
        return response.data;
    } catch (error) {
        console.error("Error updating the profile:", error.response?.data || error.message);
        throw error;
    }
}