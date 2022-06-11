import { useCallback, useMemo, useReducer } from "react";
import Inputs from "../components/Inputs";
import { isNotOK, reducer } from "../utils/util";
type UseChecksResult = [{}, boolean, () => JSX.Element];

function useInputs({ initialInputs }: any): UseChecksResult {
  const [inputs, setInputs] = useReducer(reducer, initialInputs);
  const onChange = useCallback(
    (event: any, key: string) => {
      const targetInputInfo = inputs[key];
      const newInputInfo = {
        ...targetInputInfo,
        value: event.target.value,
      };
      setInputs({ [key]: newInputInfo });
    },
    [inputs, setInputs]
  );

  const isAllOk = useMemo(() => {
    for (const key in inputs) {
      const { required, validate, value } = inputs[key];
      if (isNotOK(validate(required, value))) return false;
    }
    return true;
  }, [inputs]);

  const renderInputs = useCallback(() => {
    return <Inputs infoList={inputs} onChange={onChange} />;
  }, [inputs, setInputs]);

  return [inputs, isAllOk, renderInputs];
}

export default useInputs;
