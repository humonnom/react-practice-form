import { isEmptyString, isFalse, isTrue, STATE } from "./util";

export const validateCheck = (isRequired: boolean, value: boolean) => {
  if (isFalse(isRequired) || (isTrue(isRequired) && isTrue(value))) {
    return STATE.OK;
  }
  return STATE.REAUIRED;
};

export const validatePassword = (isRequired: boolean, value: string) => {
  // 형식체크
  // 길이체크
  if (isTrue(isRequired) && isEmptyString(value)) return STATE.EMPTY;
  return STATE.OK;
};

export const validateName = (isRequired: boolean, value: string) => {
  // 형식체크
  // 중복체크(서버)
  if (isTrue(isRequired) && isEmptyString(value)) return STATE.EMPTY;
  return STATE.OK;
};

export const validateReferralName = (isRequired: boolean, value: string) => {
  // 형식체크
  // 존재하는 유저네임인지 체크(서버)
  if (isTrue(isRequired) && isEmptyString(value)) return STATE.EMPTY;
  return STATE.OK;
};

export const validateEmail = (isRequired: boolean, value: string) => {
  // 형식체크
  // 중복체크
  if (isTrue(isRequired) && isEmptyString(value)) return STATE.EMPTY;
  return STATE.OK;
};

export const validatePhone = (isRequired: boolean, value: string) => {
  // 형식체크
  // 중복체크
  if (isTrue(isRequired) && isEmptyString(value)) return STATE.EMPTY;
  return STATE.OK;
};
