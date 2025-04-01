import { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate, useLocation } from "react-router"; // Using React Router v6 hooks

// the items should be like this
// items={[
//   { name: "مادة ال OOP", value: "oop" },
//   { name: "مادة الكنترول", value: "control" },
//   { name: "مادة البرمجة", value: "programming" },
// ]}

const Dropdown = ({ items }) => {
  // Convert the items to a format that react-select understands
  const options = items.map((item) => ({
    value: item.value,
    label: item.name,
  }));

  const [selectedOption, setSelectedOption] = useState(options?.[0]);
  const navigate = useNavigate(); // For changing the URL
  const location = useLocation(); // To access the current URL

  // Get the query parameter from the URL when the component mounts
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const material = query.get("material");
    if (material) {
      const selected = options.find((option) => option.value === material);
      setSelectedOption(selected);
    }
  }, [location.search]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);

    // Clone current URL search parameters
    const currentParams = new URLSearchParams(location.search);

    // Set the new material value
    currentParams.set("material", selectedOption.value);

    // Update the URL, preserving all other query parameters
    navigate({
      pathname: location.pathname,
      search: currentParams.toString(), // Use the updated query string
    });
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="اختر مادة"
      />
    </div>
  );
};

export default Dropdown;
