const FileUploader = ({ name, label, required, setValue }) => {
  // Function to handle file selection

  // Function to generate a random name for the file
  const generateRandomName = (originalName) => {
    const timestamp = Date.now(); // Get current timestamp
    const randomString = Math.random().toString(36).substring(2, 8); // Generate random string
    const extension = originalName.split(".").pop(); // Get file extension
    const nameWithoutExtension = originalName.split(".").slice(0, -1).join("."); // Get the original file name without extension

    return `${timestamp}_${randomString}_${nameWithoutExtension}.${extension}`; // Combine them for the new file name
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    console.log(file);
    if (file) {
      // Generate a random name for the file
      const randomName = generateRandomName(file.name);

      // Create a new file object with the new name
      const newFile = new File([file], randomName, { type: file.type });

      // Log the new file to verify the changes
      console.log("New file with random name:", newFile);

      // Set the file object with the new random name in the form state
      setValue(name, newFile); // Store the new file in the form state
    }
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="file"
        onChange={handleFileChange} // Handle the file change
        accept="image/*, video/*, application/pdf"
        required={required}
      />
    </div>
  );
};

export default FileUploader;
