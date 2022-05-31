import { Infos } from "../interfaces/interface";

export const TYPE = Object.freeze({
  NAME: Symbol("name"),
  NUMBER: Symbol("number"),
});

export const InfosReducer = (state: Infos, nextState: any): Infos => {
  return {
    ...state,
    ...nextState,
  };
};
