import React, { useCallback, useMemo, useReducer } from "react";
import Checks from "../components/Checks";
import { isNotOK, reducer } from "../utils/util";
type UseChecksResult = [{}, boolean, () => JSX.Element];

function useChecks({ initialChecks }: any): UseChecksResult {
  const [checks, setChecks] = useReducer(reducer, initialChecks);
  const onChange = useCallback(
    (event: any, key: string): void => {
      const targetCheckInfo = checks[key];
      const newCheckInfo = {
        ...targetCheckInfo,
        checked: event.target.checked,
      };
      setChecks({ [key]: newCheckInfo });
    },
    [checks, setChecks]
  );

  const isAllChecked = useMemo(() => {
    for (const key in checks) {
      const { required, validate, checked } = checks[key];
      if (isNotOK(validate(required, checked))) return false;
    }
    return true;
  }, [checks]);

  const renderChecks = useCallback(() => {
    return <Checks infoList={checks} onChange={onChange} />;
  }, [checks, onChange]);

  return [checks, isAllChecked, renderChecks];
}

export default useChecks;
