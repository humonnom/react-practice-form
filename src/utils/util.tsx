export const STATE = Object.freeze({
  INIT: Symbol("init"),
  EMPTY: Symbol("empty"),
  WRONGLENGTH: Symbol("wrong-length"),
  MALFORMED: Symbol("malformed"),
  OVERLAP: Symbol("overlap"),
  MISSING: Symbol("missing"),
  OK: Symbol("ok"),
  REAUIRED: Symbol("required"),
});

export const TYPE = Object.freeze({
  NAME: Symbol("name"),
  EMAIL: Symbol("email"),
  PHONE: Symbol("phone-number"),
  PASSWORD: Symbol("password"),
  FRIENDNAME: Symbol("friend-name"),
  TERM: Symbol("term"),
  PRIVACYPOLICY: Symbol("privacy-policy"),
  REVEIVEEMAIL: Symbol("receive-email"),
});

export const reducer = (state: any, nextState: any): any => {
  return {
    ...state,
    ...nextState,
  };
};

export const toggle = (state: boolean): boolean => {
  return !state;
};

export const isNotOK = (state: symbol) => state !== STATE.OK;
export const isTrue = (value: boolean) => value === true;
export const isFalse = (value: boolean) => value === false;
export const isEmptyString = (value: string) => value.length === 0;

export const debounce = (
  callback: (arg1: any, arg2: string) => void,
  delay: number
) => {
  let timerId: any;
  return (event: React.FormEvent<HTMLInputElement>) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};

// TODO: 디바운스 어디다 걸지 생각하기
export const isExistent = (type: symbol, value: any) => {
  // api 요청
  return false;
};

export const isOverlap = (type: symbol, value: any) => isExistent(type, value);
export const isMissing = (type: symbol, value: any) => !isExistent(type, value);

export const hasWrongLength = (
  value: string,
  lengthInfo: { min?: number; max?: number }
) => {
  const { min, max } = lengthInfo;
  if (min && value.length < min) return true;
  if (max && value.length > max) return true;
  return false;
};
