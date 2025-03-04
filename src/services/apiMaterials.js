export async function getMaterial(materialId) {
  const response = await fetch(`http://localhost:3000/material`);

  if (!response.ok) {
    throw new Error("Failed to fetch material");
  }
  const data = await response.json();

  const material = data.find((item) => item.id === Number(materialId));

  return material || null;
}

export async function getMaterials() {
  const response = await fetch("http://localhost:3000/materials");
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch material");
  }
  const data = await response.json();
  return data;
}
