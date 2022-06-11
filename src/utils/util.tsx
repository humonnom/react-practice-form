export const STATE = Object.freeze({
  INIT: Symbol("init"),
  EMPTY: Symbol("empty"),
  WRONGLENGTH: Symbol("wrong-length"),
  MALFORMED: Symbol("malformed"),
  OVERLAP: Symbol("overlap"),
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

export const isNotOK = (state: symbol) => state !== STATE.OK;
export const isTrue = (value: boolean) => value === true;
export const isFalse = (value: boolean) => value === false;
export const isEmptyString = (value: string) => value.length === 0;
