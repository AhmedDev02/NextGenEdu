const FileUploaderArray = ({ name, label, required, setValue }) => {
  // Function to handle file selection
  const handleFileChange = (e) => {
    const files = e.target.files; // Get all selected files
    console.log(files);
    if (files.length > 0) {
      const fileArray = Array.from(files).map((file) => {
        // Generate a random name for each file
        const randomName = generateRandomName(file.name);

        // Create a new file object with the new name for each file
        return new File([file], randomName, { type: file.type });
      });

      // Log the new files to verify the changes
      console.log("New files with random names:", fileArray);

      // Set the files array in the form state
      setValue(name, fileArray); // Store the array of files in the form state
    }
  };

  // Function to generate a random name for each file
  const generateRandomName = (originalName) => {
    const timestamp = Date.now(); // Get current timestamp
    const randomString = Math.random().toString(36).substring(2, 8); // Generate random string
    const extension = originalName.split(".").pop(); // Get file extension
    const nameWithoutExtension = originalName.split(".").slice(0, -1).join("."); // Get the original file name without extension

    return `${timestamp}_${randomString}_${nameWithoutExtension}.${extension}`; // Combine them for the new file name
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
        multiple // Enable multiple file selection
      />
    </div>
  );
};

export default FileUploaderArray;
