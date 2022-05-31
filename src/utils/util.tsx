import { Infos } from "../interfaces/interface";

export const STATE = Object.freeze({
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
});

export const InfosReducer = (state: Infos, nextState: any): Infos => {
  return {
    ...state,
    ...nextState,
  };
};
