import { useMemo, useReducer } from "react";
import useInputs from "../hooks/useInputs";
import { STATE, toggle } from "../utils/util";
import { validatePassword } from "../utils/validate";

function PasswordContainer({ setIsOk }: any): JSX.Element {
  const [viewPassword, toggleViewPassword] = useReducer(toggle, false);
  const passwordToggleButtonMessage = useMemo(() => {
    console.log(viewPassword);
    return viewPassword ? "비밀번호 숨기기" : "비밀번호 보이기";
  }, [viewPassword]);

  const [inputs, isAllOk, renderPasswordInputs] = useInputs({
    initialInputs: {
      password: {
        id: "password",
        type: "password",
        label: "비밀번호",
        value: "",
        required: true,
        state: STATE.INIT,
        validate: validatePassword,
      },
      passwordComfirm: {
        id: "password-confirm",
        type: "password",
        label: "비밀번호 재입력",
        value: "",
        required: true,
        state: STATE.INIT,
        validate: validatePassword,
      },
    },
  });
  return (
    <div>
      <p> == Password Container ==</p>
      <button type="button" onClick={toggleViewPassword}>
        {passwordToggleButtonMessage}
      </button>
      {renderPasswordInputs()}
    </div>
  );
}

export default PasswordContainer;
