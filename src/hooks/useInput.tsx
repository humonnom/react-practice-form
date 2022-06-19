import { InputProps } from "../types/InputProps";
import React, { useContext } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, setErrors, errors } = useContext(FormContext);

  const getError = (source: any) => {
    let error: string = "";
    props.validate?.some((f) => {
      if (!error) error = f(source);
      else return true;
    });
    return error;
  };

  const onChange = React.useCallback(
    (v: string | boolean) => {
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
