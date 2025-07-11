import { BASE_URL } from "../../utils/apiConstant";

export async function signOut(token) {
  try {
    // Construct the full URL for the logout endpoint
    const response = await fetch(`${BASE_URL}/logout`, {
      method: "POST", // Use POST or DELETE, as shown in your Postman image (DELETE is ideal)
      headers: {
        "Content-Type": "application/json", // Or 'application/x-www-form-urlencoded' if your backend expects it
        Accept: "application/json", // Generally good practice for API responses
        Authorization: `Bearer ${token}`, // Send the token for invalidation
      },
    });

    if (!response.ok) {
      // If the server returns an error (e.g., 401 Unauthorized if token is invalid, 500 etc.)
      const errorData = await response
        .json()
        .catch(() => ({ message: "Unknown error" }));
      throw new Error(
        `Logout failed: ${response.status} - ${
          errorData.message || response.statusText
        }`
      );
    }

    const data = await response
      .json()
      .catch(() => ({ message: "Logout successful" }));
    return data; // Or simply return true/void if no specific data is expected
  } catch (error) {
    console.error("Sign out error:", error);
    // Rethrow the error so the calling hook/component can handle it
    throw error;
  }
}
