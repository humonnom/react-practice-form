import React, { useCallback, useMemo, useReducer } from "react";
import Checks from "../components/Checks";
import { isNotOK, reducer } from "../utils/util";
type UseChecksResult = [{}, boolean, () => JSX.Element];

function useChecks({ initialChecks }: any): UseChecksResult {
  const [checks, setChecks] = useReducer(reducer, initialChecks);
  const onChange = useCallback(
    (event: any, key: string) => {
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
    let checkComps = [];
    for (const key in checks) {
      const { id, label, required, checked } = checks[key];
      const labelWithAster = label + (required ? "*" : "");
      checkComps.push(
        <div key={Math.random()}>
          <>{labelWithAster}</>
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={(e) => onChange(e, key)}
          />
        </div>
      );
    }
    return <Checks inside={checkComps} />;
  }, [checks, setChecks]);

  return [checks, isAllChecked, renderChecks];
}

export default useChecks;
