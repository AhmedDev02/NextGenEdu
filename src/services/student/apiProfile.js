import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const getProfileData = async ({ token, user }) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    const { role } = user
    try {
        const url =
            role === 'Student'
                ? `${BASE_URL}/profile`
                : role === 'Teacher'
                    ? `${BASE_URL}/teachers/profile`
                    : role === 'Super admin'
                        ? `${BASE_URL}/dashboard/profile` // or the correct endpoint for superadmin
                        : `${BASE_URL}/profile`
        const response = await axios.get(url, {
            headers,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching Profile information:", error.message);
        throw error;
    }
}

export const updateProfileData = async (password, avatar, token) => {
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
        const response = await axios.post(`${BASE_URL}/update`, formData, {
            headers,
        });
        return response.data;
    } catch (error) {
        console.error("Error updating the profile:", error.response?.data || error.message);
        throw new Error(error.message);
    }
};