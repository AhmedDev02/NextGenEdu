import axios from "axios";
import { BASE_URL } from "../../utils/apiConstant";
import toast from "react-hot-toast";

export async function getMaterial({ queryKey }) {
  const [_key, { token, materialId }] = queryKey;
  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Device-Type": "web",
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/teachers/course-materials/${materialId}`,
      { headers }
    );

    // Checking the response status code (status code 200 means success)
    if (response.status !== 200) {
      toast.error(
        "حدث خطأ أثناء تحميل البيانات، يرجى المحاولة مرة أخرى لاحقًا."
      );
    }
    // Return the fetched data
    return response.data;
  } catch (error) {
    console.error("Error fetching material: ", error);
  }

  return null; // Return null if there was an error
}
