// import { useFinalResults } from "./useFinalResults";
import YearAccordion from "./YearAccordion";
import { academicData } from "./data";
function FinalResultsContent() {
  //   const { data: academicData, isPending, error } = useFinalResults();
  //   if (isPending) return <Spinner />;
  //   if (error) return toast.error("error loading data");
  return (
    <>
      {academicData.map((year) => (
        <YearAccordion key={year.year} data={year} />
      ))}
    </>
  );
}
export default FinalResultsContent;
