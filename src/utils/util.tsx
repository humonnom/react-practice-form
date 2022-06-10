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

const getMessageByState = (state: boolean) => {
  return "에러 메세지";
};

export const renderWithLabel = (
  label: string,
  renderer: () => JSX.Element,
  state: boolean
) => {
  return (
    <div>
      <p>{label}</p>
      {renderer()}
      <p>{getMessageByState(state)}</p>
    </div>
  );
};

export const validateCheck = (isRequired: boolean, value: boolean) => {
  if (isFalse(isRequired) || (isTrue(isRequired) && isTrue(value))) {
    return STATE.OK;
  }
  return STATE.REAUIRED;
};

export const validateName = (isRequired: boolean, value: string) => {
  return STATE.OK;
};
