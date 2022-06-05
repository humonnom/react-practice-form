import { InfosInterface } from "../interfaces/interface";

export const STATE = Object.freeze({
  INIT: Symbol("init"),
  EMPTY: Symbol("empty"),
  WRONGLENGTH: Symbol("wrong-length"),
  MALFORMED: Symbol("malformed"),
  OVERLAP: Symbol("overlap"),
  OK: Symbol("ok"),
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

export const infosReducer = (
  state: InfosInterface,
  nextState: any
): InfosInterface => {
  return {
    ...state,
    ...nextState,
  };
};
