import React, { FunctionComponent } from "react";
import { SelectProps } from "../types/InputProps";
import useInput from "../hooks/useInput";
import ErrorMessage from "./ErrorMessage";

const SelectboxField: FunctionComponent<SelectProps> = ({
  source,
  label,
  option,
  validate,
}) => {
  const { value, onChange, error } = useInput({ source, validate });
  const optionComp = React.useMemo(() => {
    return option.map((element) => (
      <option key={element.key} value={element.value}>
        {element.value}
      </option>
    ));
  }, [option]);
  return (
    <div>
      <div style={{ display: "flex", gridGap: "8px" }}>
        <label htmlFor={source}>{label}</label>
        <select onChange={(e) => onChange(e.target.value)}>{optionComp}</select>
      </div>
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};

export default SelectboxField;
