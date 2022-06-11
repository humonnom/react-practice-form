import useChecks from "../hooks/useChecks";
import { validateCheck } from "../utils/validate";

function CheckboxContainer({ update }: any): JSX.Element {
  const [checks, isAllchecked, renderChecks] = useChecks({
    initialChecks: {
      term: {
        id: "term",
        label: "약관 동의",
        checked: false,
        required: true,
        validate: validateCheck,
      },
      privacyPolicy: {
        id: "privacy-policy",
        label: "개인정보 수집 동의",
        checked: false,
        required: true,
        validate: validateCheck,
      },
      receiveEmail: {
        id: "receive-email",
        label: "이메일 수신 동의",
        checked: false,
        required: false,
        validate: validateCheck,
      },
    },
  });
  return (
    <div>
      <p>== Check Container ==</p>
      {renderChecks()}
    </div>
  );
}

export default CheckboxContainer;
