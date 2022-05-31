import { useInput } from "../hooks/useInput";
import { TYPE } from "../utils/util";
import StateMessage from "./StateMessage";

const Terms = ({}) => {
  const { value: termValue, comp: termComp } = useInput({
    typeInApp: TYPE.PHONE,
    id: "terms",
    type: "checkbox",
    label: "약관동의",
  });

  return (
    <>
      {termComp}
      <StateMessage type={TYPE.TERM} value={termComp} />
    </>
  );
};

export default Terms;
