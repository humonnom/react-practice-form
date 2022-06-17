import {
  hasWrongLength,
  isEmptyString,
  isFalse,
  isMissing,
  isOverlap,
  isTrue,
  STATE,
  TYPE,
} from "./util";

export const validateCheckbox = (isRequired: boolean, value: boolean) => {
  if (isFalse(isRequired) || (isTrue(isRequired) && isTrue(value))) {
    return STATE.OK;
  }
  return STATE.REAUIRED;
};

export const validatePassword = (isRequired: boolean, value: string) => {
  if (isTrue(isRequired) && isEmptyString(value)) return STATE.EMPTY;
  // 형식체크
  if (hasWrongLength(value, { min: 8, max: 50 })) return STATE.WRONGLENGTH;
  return STATE.OK;
};

export const validateName = (isRequired: boolean, value: string) => {
  if (isTrue(isRequired) && isEmptyString(value)) return STATE.EMPTY;
  if (hasWrongLength(value, { min: 8, max: 20 })) return STATE.WRONGLENGTH;
  if (isOverlap(TYPE.NAME, value)) return STATE.OVERLAP;
  return STATE.OK;
};

export const validateReferralName = (isRequired: boolean, value: string) => {
  if (isTrue(isRequired) && isEmptyString(value)) return STATE.EMPTY;
  if (isMissing(TYPE.NAME, value)) return STATE.MISSING;
  return STATE.OK;
};

// TODO 구현 완료하기
const isNotEmail = (value: string) => {
  return false;
};

export const validateEmail = (isRequired: boolean, value: string) => {
  if (isTrue(isRequired) && isEmptyString(value)) return STATE.EMPTY;
  if (isNotEmail(value)) return STATE.MALFORMED;
  // 중복체크
  if (isOverlap(TYPE.EMAIL, value)) return STATE.OVERLAP;
  return STATE.OK;
};

// TODO 구현 완료하기
const isNotPhoneNumber = (value: string) => {
  return false;
};

export const validatePhone = (isRequired: boolean, value: string) => {
  if (isTrue(isRequired) && isEmptyString(value)) return STATE.EMPTY;
  if (isNotPhoneNumber(value)) return STATE.MALFORMED;
  if (isOverlap(TYPE.PHONE, value)) return STATE.OVERLAP;
  return STATE.OK;
};

// validators

export const min = (minLen: number) => {
  return (source: string) => {
    if (source?.length < minLen) return `${minLen}보다 길게 적어주세요.`;
    else return "";
  };
};
export const max = (maxLen: number) => {
  return (source: string) => {
    if (source?.length > maxLen) return `${maxLen}보다 짧게 적어주세요.`;
    else return "";
  };
};
export const match = (regex: RegExp) => {
  return (source: string) => {
    if (!regex.test(source)) return "형식에 맞지 않습니다.";
    else return "";
  };
};
