import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useChecks from "../hooks/useChecks";
import useInputs from "../hooks/useInputs";
import { validateCheck, validateName } from "../utils/util";

const JoinPage = () => {
  const navigate = useNavigate();

  const [inputs, isAllOk, renderInputs] = useInputs({
    initialInputs: {
      name: {
        id: "name",
        type: "text",
        label: "유저네임",
        value: "",
        required: true,
        validate: validateName,
      },
      password: {
        id: "password",
        type: "password",
        label: "비밀번호",
        value: "",
        required: true,
        validate: validateName,
      },
      email: {
        id: "email",
        type: "email",
        label: "이메일",
        value: "",
        required: true,
        validate: validateName,
      },
      phone: {
        id: "phone",
        type: "phone",
        label: "전화번호",
        value: "",
        required: true,
        validate: validateName,
      },
      referral: {
        id: "referral-name",
        type: "text",
        label: "추천인 유저네임",
        value: "",
        required: false,
        validate: validateName,
      },
    },
  });

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

  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      // case: success
      console.log(inputs, checks);
      navigate("/confirm", {
        state: {
          inputs: "?",
          checks: "?",
        },
      });
    },
    [inputs, checks]
  );

  const submittable = useMemo(() => {
    return isAllchecked && isAllOk;
  }, [isAllchecked, isAllOk]);

  const submitButtonMessege = useMemo(() => {
    if (submittable) return "최종 제출하기";
    else return "입력을 다시 한번 확인해주세요";
  }, [submittable]);

  return (
    <>
      <form>
        {renderInputs()}
        {renderChecks()}
        <button disabled={!submittable} type="button" onClick={handleSubmit}>
          {submitButtonMessege}
        </button>
      </form>
    </>
  );
};

export default JoinPage;
