import { useMemo } from "react";

type CheckProps = {
  id: string;
  checked: boolean;
  onChange: (arg1: any, arg2: string) => void;
};

function Check({ id, checked, onChange }: CheckProps) {
  const Comps = useMemo(() => {
    return (
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e, id)}
      />
    );
  }, [id, checked, onChange]);

  return <div>{Comps}</div>;
}

export default Check;
