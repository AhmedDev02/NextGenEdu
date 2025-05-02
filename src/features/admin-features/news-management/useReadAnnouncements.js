import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../../utils/apiConstant";
import axiosInstance from "../../../services/api/axiosInstance";

export function useAnnouncements() {
  const user = useSelector((state) => state.auth.user); // Get the user from Redux store
  const token = user ? user.token : null;

  const queryFn = async () => {
    if (!token) return []; // Return an empty array if there's no token

    const announcementEndpoint = BASE_URL + "/dashboard/my-announcements";

    const headers = {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-Device-Type": "web",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axiosInstance.get(announcementEndpoint, {
        headers,
      });
      return response.data.data.data; // Assuming data is nested under `data.data.data`
    } catch (error) {
      console.error("Error fetching announcements:", error);
      return []; // Return an empty array on error
    }
  };

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["announcements", token], // Query key depends on the token to refetch if it changes
    queryFn,
    enabled: !!token, // Only run the query if token is available
  });

  return { announcements: data, isLoading, error };
}
