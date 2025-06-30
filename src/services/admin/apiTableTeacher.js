import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";

export const apiReadTableTeacher = async (token) => {
    const headers = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Device-Type": "web",
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get(`${BASE_URL}/teachers/table`, {
            headers,
        });
        // console.log("table data:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching table of Teachers:", error.message);
        throw error
    }
}
