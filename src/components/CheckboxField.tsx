import React, { FunctionComponent } from "react";
import { InputProps } from "../types/InputProps";
import useInput from "../hooks/useInput";
import ErrorMessage from "./ErrorMessage";

const CheckboxField: FunctionComponent<InputProps> = ({
  source,
  label,
  validate,
}) => {
  const { value, onChange, error } = useInput({ source, validate });
  return (
    <div>
      <div style={{ display: "flex", gridGap: "8px" }}>
        <label htmlFor={source}>{label}</label>
        <input
          checked={value ?? false}
          onChange={(e) => onChange(e.target.checked)}
          name={source}
          type="checkbox"
        />
      </div>
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};

export default CheckboxField;
