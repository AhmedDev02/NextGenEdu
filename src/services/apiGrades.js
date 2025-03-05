export async function fetchStudentProgress(id) {
    try {
        const response = await fetch(`http://localhost:9000/${id}`);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}
