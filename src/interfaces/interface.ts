interface UserInfo {
  value: string;
  status: symbol;
}

interface UserInfosInterface {
  name: UserInfo;
  email: UserInfo;
  phoneNumber: UserInfo;
  password: UserInfo;
  passwordConfirm: UserInfo;
  friendName: UserInfo;
}

interface AgreementInfo {
  value: boolean;
  status: symbol;
}
interface AgreementInfosInterface {
  term: AgreementInfo;
  privacyPolicy: AgreementInfo;
  receiveEmail: AgreementInfo;
}
export type {
  UserInfo,
  UserInfosInterface,
  AgreementInfo,
  AgreementInfosInterface,
};
