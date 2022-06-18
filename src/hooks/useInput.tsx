import { InputProps } from "../types/InputProps";
import React, { useContext, useEffect } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, setErrors, errors } = useContext(FormContext);

  const getError = React.useCallback(
    (source: string | number | boolean) => {
      let message: string = "";
      props.validate?.forEach((f) => {
        if (message) return false;
        message = f(source.toString()); // TODO solve validator args type conflict
      });
      return message;
    },
    [props.validate]
  );

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
