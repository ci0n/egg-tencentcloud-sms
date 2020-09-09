import { SmsSdkAppidParams, Result } from "./base";


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

export interface SendSmsParams extends SmsSdkAppidParams {
  PhoneNumberSet: string | Array<string>;
  TemplateID: string;
  Sign: string;
  TemplateParamSet?: string | Array<string> | Array<number>,
  ExtendCode?: string;
  SessionContext?: string;
  SenderId?: string;
}