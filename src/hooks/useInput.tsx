import { InputProps } from "../types/InputProps";
import React, { useContext } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source"> {
  validate: () => string;
}

// TODO: add validate code
function useInput(props: UseInputProps) {
  const { setValues, values } = useContext(FormContext);
  console.log(props.validate());
  const error = "fake error";
  const onChange = React.useCallback(
    (v: string | number) => {
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
