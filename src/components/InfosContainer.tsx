import { useInput } from "../hooks/useInput";
import { TYPE } from "../utils/util";
import StateMessage from "./StateMessage";

const InfosContainer = () => {
  const { value: userNameValue, comp: userNameComp } = useInput({
    typeInApp: TYPE.NAME,
    id: "name",
    type: "text",
    label: "유저네임",
  });

  const { value: emailValue, comp: emailComp } = useInput({
    typeInApp: TYPE.EMAIL,
    id: "email",
    type: "email",
    label: "이메일",
  });

  const { value: phoneNumberValue, comp: phoneNumberComp } = useInput({
    typeInApp: TYPE.PHONE,
    id: "phone",
    type: "tel",
    label: "전화번호",
  });

  const { value: passwordValue, comp: passwordComp } = useInput({
    typeInApp: TYPE.PASSWORD,
    id: "password",
    type: "password",
    label: "비밀번호",
  });

  const { value: passwordConfirmValue, comp: passwordConfirmComp } = useInput({
    typeInApp: TYPE.PASSWORD,
    id: "confirm",
    type: "password",
    label: "비밀번호 확인",
  });

  const { value: friendNameValue, comp: friendNameComp } = useInput({
    typeInApp: TYPE.FRIENDNAME,
    id: "friend-name",
    type: "text",
    label: "추천인 유저네임",
  });

  return (
    <>
      {userNameComp}
      <StateMessage type={TYPE.NAME} value={userNameValue} />
      {emailComp}
      <StateMessage type={TYPE.EMAIL} value={emailValue} />
      {phoneNumberComp}
      <StateMessage type={TYPE.PHONE} value={phoneNumberValue} />
      {passwordComp}
      <StateMessage type={TYPE.PASSWORD} value={passwordValue} />
      {passwordConfirmComp}
      <StateMessage type={TYPE.PASSWORD} value={passwordConfirmValue} />
      {friendNameComp}
      <StateMessage type={TYPE.FRIENDNAME} value={friendNameValue} />
    </>
  );
};
export default InfosContainer;
