import { useState } from "react";

type UseCheckResult = [boolean, () => JSX.Element, boolean];

function useCheck({ id, initValue, validate, required }: any): UseCheckResult {
  const [value, setValue] = useState(initValue);
  const onChangeChecked = (event: any) => setValue(event.target.checked);
  const renderComp = () => (
    <input type="checkbox" id={id} checked={value} onChange={onChangeChecked} />
  );
  const isValid = validate(required, value);
  return [value, renderComp, isValid];
}

export default useCheck;
