import { FocusEventHandler, ChangeEventHandler } from "react";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  id: string;
  value: string;
  handleBlur: FocusEventHandler<HTMLInputElement> | undefined;
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
  error: string | undefined;
  touched: boolean | undefined;
}

const FormInput = ({
  label,
  name,
  type,
  id,
  value,
  handleBlur,
  handleChange,
  error,
  touched,
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2 w-[400px]">
      <label className="font-bold" htmlFor="firstName">
        {label}
      </label>
      <input
        className="text-black p-3 rounded-lg w-"
        type={type}
        name={name}
        id={id}
        onBlur={handleBlur}
        value={value}
        onChange={handleChange}
      />
      {touched && error ? (
        <p className="text-red-600 h-3">{error}</p>
      ) : (
        <p className="h-3"></p>
      )}
    </div>
  );
};

export default FormInput;
