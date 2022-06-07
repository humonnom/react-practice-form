interface Info {
  value: string | boolean;
  status: symbol;
}
interface InfosInterface {
  name: Info;
  email: Info;
  phoneNumber: Info;
  password: Info;
  passwordConfirm: Info;
  friendName: Info;
  term: Info;
  privacyPolicy: Info;
  receiveEmail: Info;
}

export type { Info, InfosInterface };
