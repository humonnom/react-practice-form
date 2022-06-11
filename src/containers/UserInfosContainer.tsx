import useInputs from "../hooks/useInputs";
import { STATE } from "../utils/util";
import {
  validateEmail,
  validateName,
  validatePhone,
  validateReferralName,
} from "../utils/validate";

function UserInfosContainer({ setIsOk }: any): JSX.Element {
  const [inputs, isAllOk, renderInputs] = useInputs({
    initialInputs: {
      name: {
        id: "name",
        type: "text",
        label: "유저네임",
        value: "",
        required: true,
        state: STATE.INIT,
        validate: validateName,
      },
      email: {
        id: "email",
        type: "email",
        label: "이메일",
        value: "",
        required: true,
        state: STATE.INIT,
        validate: validateEmail,
      },
      phone: {
        id: "phone",
        type: "phone",
        label: "전화번호",
        value: "",
        required: true,
        state: STATE.INIT,
        validate: validatePhone,
      },
      referral: {
        id: "referral-name",
        type: "text",
        label: "추천인 유저네임",
        value: "",
        required: false,
        state: STATE.INIT,
        validate: validateReferralName,
      },
    },
  });
  return (
    <div>
      <p>== User Info Container ==</p>
      {renderInputs()}
    </div>
  );
}

export default UserInfosContainer;
