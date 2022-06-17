import { InputProps } from "../types/InputProps";
import React, { useContext, useEffect } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, setError } = useContext(FormContext);
  const error = React.useMemo(() => {
    let message = "";
    props.validate?.forEach((f) => {
      if (message) return false;
      message = f(values[props.source]);
    });
    return message;
  }, [props.validate, values[props.source]]);
  useEffect(() => {
    setError(!!error);
  }, [error]);
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
