import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const apiReadTable = async (token) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/table`, { headers });
        return response.data;
    } catch (error) {
        console.error("Error fetching table:", error.message);
        throw error;
    }
}