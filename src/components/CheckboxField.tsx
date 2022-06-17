import React, { FunctionComponent } from "react";
import { InputProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

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
    </div>
  );
};

export default CheckboxField;
