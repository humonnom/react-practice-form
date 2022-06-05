interface Info {
  value: string;
  status: symbol;
}
interface InfosInterface {
  name: Info;
  email: Info;
  phoneNumber: Info;
  password: Info;
  friendName: Info;
  term: Info;
  privacyPolicy: Info;
  receiveEmail: Info;
}

export type { Info, InfosInterface };
