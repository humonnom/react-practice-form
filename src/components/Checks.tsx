import { useMemo } from "react";
import Check from "./Check";

type ChecksProps = {
  infoList: any;
  onChange: (arg1: any, arg2: string) => void;
};

function Checks({ infoList: checks, onChange }: ChecksProps) {
  const Comps = useMemo(() => {
    return Object.keys(checks).map((key) => {
      const { id, label, required, checked } = checks[key];
      const labelWithAster = label + (required ? "*" : "");
      return (
        <>
          <div key={id}>
            <>{labelWithAster}</>
            <Check
              id={id}
              checked={checked}
              onChange={(e) => onChange(e, key)}
            />
          </div>
        </>
      );
    });
  }, [checks, onChange]);

  return <div>{Comps}</div>;
}

export default Checks;
