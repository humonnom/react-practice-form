import { useMemo, useState } from "react";
import Input from "../components/Input";

export const useInput = ({
  typeInApp: symbol, // typeInApp: use for validaion
  id,
  type,
  label,
  required,
}: any) => {
  const [value, setValue] = useState("");
  const onChangeValue = (event: any) => {
    setValue(event.target.value);
  };
  const onChangeChecked = (event: any) => {
    setValue(event.target.checked);
  };
  const init = () => setValue("");
  const comp = useMemo(() => {
    return (
      <>
        <p>
          {label}
          {required ? "(*필수)" : ""}
        </p>
        <Input
          type={type}
          id={id}
          value={value}
          onChangeValue={onChangeValue}
          onChangeChecked={onChangeChecked}
        />
      </>
    );
  }, [value]);

  return { value, comp, init };
};
