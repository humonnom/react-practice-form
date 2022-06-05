import { useInput } from "../hooks/useInput";
import { STATE, TYPE } from "../utils/util";
import StateMessage from "../components/StateMessage";
import { useEffect } from "react";

const AgreementContainer = ({ updateValue, updateStatus }: any) => {
  const { value: termValue, comp: termComp } = useInput({
    typeInApp: TYPE.TERM,
    id: "terms",
    type: "checkbox",
    label: "약관동의",
    required: true,
  });

  useEffect(() => {
    console.log(termValue);
    updateValue({ key: "term", value: termValue });
  }, [termValue]);

  // useEffect(() => {
  //   updateStatus({ term: STATE.OK }); // should update validation
  // }, [termValue]);

  const { value: privacyPolicyValue, comp: privacyPolicyComp } = useInput({
    typeInApp: TYPE.PRIVACYPOLICY,
    id: "privacy-policy",
    type: "checkbox",
    label: "개인정보수집동의",
    required: true,
  });
  useEffect(() => {
    updateStatus({ privacyPolicy: true }); // should update validation
  }, [termValue]);

  const { value: receiveEmailValue, comp: receiveEmailComp } = useInput({
    typeInApp: TYPE.REVEIVEEMAIL,
    id: "receive-email",
    type: "checkbox",
    label: "메일수신동의",
    required: false,
  });
  useEffect(() => {
    updateStatus({ receiveEmail: true }); // should update validation
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
