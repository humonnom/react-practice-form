import { useMemo, useState } from "react";

export const useInput = ({ typeInApp, id, type, label }: any) => {
  const [value, setValue] = useState("");

  //  typeInApp: TYPE.NAME,
  //  id: "name",
  //  type: "text",
  //  label: "유저네임",

  const onChange = (event: any) => setValue(event.currentTarget.value);
  const init = () => setValue("");

  const comp = useMemo(() => {
    return (
      <>
        <p>{label}</p>
        <input type={type} id={id} value={value} onChange={onChange} />
      </>
    );
  }, [value]);

  return { value, comp, init };
};
