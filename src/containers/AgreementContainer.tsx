import { useInput } from "../hooks/useInput";
import { STATE, TYPE } from "../utils/util";
import StateMessage from "../components/StateMessage";
import { useEffect } from "react";

const AgreementContainer = ({ updateState }: any) => {
  const { value: termValue, comp: termComp } = useInput({
    typeInApp: TYPE.TERM,
    id: "terms",
    type: "checkbox",
    label: "약관동의",
    required: true,
  });
  useEffect(() => {
    updateState({ term: STATE.OK }); // should update validation
  }, [termValue]);

  const { value: privacyPolicyValue, comp: privacyPolicyComp } = useInput({
    typeInApp: TYPE.PRIVACYPOLICY,
    id: "terms",
    type: "checkbox",
    label: "개인정보수집동의",
    required: true,
  });
  useEffect(() => {
    updateState({ privacyPolicy: true }); // should update validation
  }, [termValue]);

  const { value: receiveEmailValue, comp: receiveEmailComp } = useInput({
    typeInApp: TYPE.REVEIVEEMAIL,
    id: "terms",
    type: "checkbox",
    label: "메일수신동의",
    required: false,
  });
  useEffect(() => {
    updateState({ receiveEmail: true }); // should update validation
  }, [termValue]);

  return (
    <>
      {termComp}
      <StateMessage type={TYPE.TERM} value={termValue} />
      {privacyPolicyComp}
      <StateMessage type={TYPE.PRIVACYPOLICY} value={privacyPolicyValue} />
      {receiveEmailComp}
      <StateMessage type={TYPE.REVEIVEEMAIL} value={receiveEmailValue} />
    </>
  );
};

export default AgreementContainer;
