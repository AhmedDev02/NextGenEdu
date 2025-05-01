import { Controller } from "react-hook-form";

const FileUploader = ({ control, name, label, required }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        control={control}
        name={name}
        rules={{ required: required }}
        render={({ field }) => <input {...field} id={name} type="file" />}
      />
    </div>
  );
};

export default FileUploader;
