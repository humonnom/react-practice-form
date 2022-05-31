interface DataManage {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  friendName: string;
  term: string;
  privacyPolicy: string;
  receiveEmail: string;
}
interface StateManage {
  name: symbol;
  email: symbol;
  phoneNumber: symbol;
  password: symbol;
  friendName: symbol;
  term: symbol;
  privacyPolicy: symbol;
  receiveEmail: symbol;
}

export type { DataManage, StateManage };
