export async function fetchFinalResults() {
  try {
    const response = await fetch(`http://localhost:3000/academicYears`);
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
