import { SmsSdkAppid, Result } from "./base";


export interface SendStatus {
    SerialNo: string;
    PhoneNumber: string;
    Fee: number;
    SessionContext: string;
    Code: string;
    Message: string;
    IsoCode: string;
}

export interface SendSmsResult extends Result {
  SendStatusSet: Array<SendStatus>
}

export interface SendSmsParams extends SmsSdkAppid {
  PhoneNumberSet: Array<string>;
  TemplateID: string | number;
  Sign: string;
  TemplateParamSet?: Array<string>, // must be string array.
  ExtendCode?: string;
  SessionContext?: string;
  SenderId?: string;
}