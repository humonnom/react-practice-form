import { useCallback, useEffect, useMemo, useReducer } from "react";
import Inputs from "../components/Inputs";
import { isNotOK, reducer } from "../utils/util";
type UseChecksResult = [{}, boolean, () => JSX.Element];

function useInputs({ initialInputs }: any): UseChecksResult {
  const [inputs, setInputs] = useReducer(reducer, initialInputs);
  const onChange = useCallback(
    (event: any, key: string) => {
      const targetInputInfo = inputs[key];
      const { required, validate } = targetInputInfo;
      const newValue = event.target.value;
      const newState = validate(required, newValue);
      const newInputInfo = {
        ...targetInputInfo,
        value: newValue,
        state: newState,
      };
      setInputs({ [key]: newInputInfo });
    },
    [inputs, setInputs]
  );

  const isAllOk = useMemo(() => {
    for (const key in inputs) {
      const { state } = inputs[key];
      if (isNotOK(state)) return false;
    }
    return true;
  }, [inputs]);

  const renderInputs = useCallback(() => {
    return <Inputs infoList={inputs} onChange={onChange} />;
  }, [inputs, setInputs]);

  return [inputs, isAllOk, renderInputs];
}

export default useInputs;
