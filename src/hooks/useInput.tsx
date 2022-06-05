import { useMemo, useState } from "react";

export const useInput = ({
  typeInApp: symbol, // typeInApp: use for validaion
  id,
  type,
  label,
  required,
}: any) => {
  const [value, setValue] = useState("");
  const onChange = (event: any) => {
    setValue(event.target.value);
  };
  const init = () => setValue("");
  const comp = useMemo(() => {
    return (
      <>
        <p>
          {label}
          {required ? "(*필수)" : ""}
        </p>
        <input type={type} id={id} value={value} onChange={onChange} />
      </>
    );
  }, [value]);

  return { value, comp, init };
};
