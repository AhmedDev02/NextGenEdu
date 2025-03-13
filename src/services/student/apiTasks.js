export async function fetchTasks() {
    try {
        const response = await fetch('http://localhost:3000/courses');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching assignments:', error.message);
        throw error;
    }
}