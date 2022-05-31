import { TYPE } from "../utils/util";

interface Info {
  type: symbol;
  value: string;
}

interface Infos {
  name: any;
  email: any;
  phoneNumber: any;
  password: any;
  friendName: any;
  term: any;
}

export type { Info, Infos };
