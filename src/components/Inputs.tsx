import { useMemo } from "react";
import Input from "./Input";

type InputsProps = {
  infoList: any;
  onChange: (arg1: any, arg2: string) => void;
};

function Inputs({ infoList, onChange }: InputsProps) {
  const Comps = useMemo(() => {
    return Object.keys(infoList).map((key) => {
      const { id, label, required, value, type } = infoList[key];
      const labelWithAster = label + (required ? "*" : "");
      return (
        <div key={id}>
          <>{labelWithAster}</>
          <Input
            type={type}
            id={id}
            value={value}
            onChange={(e) => onChange(e, key)}
          />
        </div>
      );
    });
  }, [infoList, onChange]);

  return <div>{Comps}</div>;
}

export default Inputs;
