import { LoaderIcon } from "react-hot-toast";

function Loader() {
  return (
    <LoaderIcon
      style={{
        display: "inline-block",
        height: "15px",
        width: "15px",
        margin: "0 8px",
        border: "5px dotted #d9f3e8",
      }}
    />
  );
}

export default Loader;
