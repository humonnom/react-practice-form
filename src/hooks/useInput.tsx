import { InputProps } from "../types/InputProps";
import React, { useContext } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values } = useContext(FormContext);
  const error = React.useMemo(() => {
    let message = "";
    props.validate?.forEach((f) => {
      if (message) return false;
      message = f(values[props.source]);
    });
    return message;
  }, [props.validate, values[props.source]]);
  const onChange = React.useCallback(
    (v: string | number | boolean) => {
      setValues({
        ...values,
        [props.source]: v,
      });
    },
    [values, props.source]
  );

  return { value: values[props.source], onChange, error };
}

export default useInput;
