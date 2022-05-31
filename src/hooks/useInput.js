import { useEffect, useMemo, useState } from "react";
import { isEmail, isURL } from "validator";
import { isPassword, getApiEndpoint } from "../utils/util";
import { useRequestAuth } from "./useRequestAuth";

export function useInput({ inputType, id, type, ...args }) {
  const [value, setValue] = useState("");

  const endpoint = `${getApiEndpoint()}/auth/validation/${inputType}/${value}`;
  const { res, request } = useRequestAuth({
    endpoint: endpoint,
    method: "get",
  });

  const onChange = (event) => setValue(event.currentTarget.value);

  const state = useMemo(() => {
    if (value === "") return null;
    if (inputType === "email") {
      if (!isEmail(value)) return "잘못된 형식입니다.";
    } else if (inputType === "password") {
      if (!isPassword(value))
        return "영문, 숫자, 특수문자 중 최소 2가지 조합으로 입력해주세요.";
      else if (value.length < 5) return "5글자 이상 입력해주세요.";
    } else if (inputType === "nickname") {
      if (value.length > 15) return "15글자 이하로 입력해주세요";
    } else if (inputType === "url") {
      const formedUrl = `http://${value}.kr`;
      if (!isURL(formedUrl))
        return "언더스코어(_), 콜론(:), 공백문자( ), 슬래시(/)는 사용할 수 없습니다.";
      else if (value.length < 4) return "4글자 이상 입력해주세요.";
      else if (value.length > 20) return "20글자 이하로 입력해주세요";
    }
    return "ok";
  }, [value]);

  useEffect(() => {
    if (state === "ok" && args.overlapCheckRequired) {
      request();
    }
  }, [value, state]);

  const overlapState = useMemo(() => {
    if (res && res.data) {
      if (res.data.code === "error") {
        alert("에러발생");
      } else if (res.data.data[`${inputType}_overlap`] === true) {
        return `이미 사용중인 ${args.label}입니다.`;
      }
    }
    return null;
  }, [res]);

  const errorMessage = useMemo(() => {
    if (state !== "ok") return state;
    else if (overlapState) return overlapState;
    else if (inputType === "email" && !args.disabled)
      return "이메일 인증을 완료해주세요!";
    return "";
  }, [state, overlapState, args]);

  const input = () => {
    if (inputType === "url")
      return (
        <div css={InputUrl}>
          {args.prefix}
          <input id={id} type={type} value={value} onChange={onChange} />
        </div>
      );
    else if (inputType === "password" || inputType === "email")
      return (
        <div css={InputPassword}>
          <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            disabled={!!args.disabled}
          />
          {args.button}
        </div>
      );
    else
      return (
        <div css={InputNormal}>
          <input id={id} type={type} value={value} onChange={onChange} />
        </div>
      );
  };

  return {
    value,
    state,
    overlapState,
    label: args.label,
    component: (
      <div css={InputContainer}>
        <div css={InputStyle}>{input()}</div>
        <div css={ErrorMessageWrapper}>
          <div css={ErrorMessageStyle}>
            <p>{errorMessage}</p>
          </div>
        </div>
      </div>
    ),
  };
}

export default useInput;
