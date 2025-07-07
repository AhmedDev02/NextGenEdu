import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const getTeachers = async (token, department = "") => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/dashboard/teachers?department=${department}`, { headers })
        return response.data;
    } catch (error) {
        console.error("Error fetching Teachers:", error.message);
        throw error;
    }
}