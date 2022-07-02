import { InputProps } from "../types/InputProps";
import React from "react";
import { FormContext } from "../components/SimpleForm";
import { isEmpty } from "../utils/util";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, setErrors, errors } =
    React.useContext(FormContext);

  const getError = (source: any) => {
    let error: string = "";
    for (const f of props.validate ?? []) {
      error = f(source);
      if (!isEmpty(error)) {
        break;
      }
    }

    return error;
  };
  const onChange = React.useCallback(
    (v: string | number | boolean) => {
      setValues({
        ...values,
        [props.source]: v,
      });
      setErrors({
        ...errors,
        [props.source]: getError(v),
      });
    },
    [values, props.source]
  );

  return { value: values[props.source], onChange, error: errors[props.source] };
}

export default useInput;
