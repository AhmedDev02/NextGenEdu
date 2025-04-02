import Filter from "../../../ui/amr/Filter";

const FilterOptions = () => {
  return (
    <div>
      <Filter
        filterField="courses"
        options={[
          { value: "all", label: "All" },
          { value: "data-structure", label: "Data Structure" },
          { value: "oop", label: "OOP" },
          { value: "algorithms", label: "Algorithms" },
        ]}
      />
    </div>
  );
};

export default FilterOptions;
