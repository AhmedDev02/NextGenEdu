import Accordion from "../../../ui/amr/Accordion";
import Table from "./Table";

function SemesterAccordion({ title, data }) {
  return (
    <Accordion title={title}>
      <Table data={data} />
    </Accordion>
  );
}

export default SemesterAccordion;
