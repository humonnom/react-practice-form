import React, { FunctionComponent } from "react";
import { SelectProps } from "../types/InputProps";
import useInput from "../hooks/useInput";
import ErrorMessage from "./ErrorMessage";

const SelectboxField: FunctionComponent<SelectProps> = ({
  source,
  label,
  options,
  validate,
}) => {
  const { value, onChange, error } = useInput({ source, validate });

  return (
    <div>
      <div style={{ display: "flex", gridGap: "8px" }}>
        <label htmlFor={source}>{label}</label>
        <select id={source} onChange={(e) => onChange(e.target.value)}>
          {options.map((element) => (
            <option key={element.value} value={element.value}>
              {element.optionLabel}
            </option>
          ))}
        </select>
      </div>
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};

export default SelectboxField;
