import { ListParams, Result, SmsSdkAppid } from "./base";


export interface SendEndDateTime {
  SendDateTime: number;
  EndDateTime?: number;
}


export interface PhoneNumber {
  PhoneNumber: string;
}

export interface PullSmsSendStatus {
  UserReceiveTime: string;
  UserReceiveUnixTime: number;
  NationCode: string;
  PurePhoneNumber: string;
  PhoneNumber: string;
  SerialNo: string;
  ReportStatus: string;
  Description: string;
}

export interface PullSmsReplyStatus {
  ExtendCode: string;
  NationCode: string;
  PhoneNumber: string;
  Sign: string;
  ReplyContent: string;
  ReplyTime: string;
  ReplyUnixTime: number;
}

export interface PullSmsSendStatusByPhoneNumberResult extends Result {
  PullSmsSendStatusSet: Array<PullSmsSendStatus>
}
export interface PullSmsSendStatusResult extends PullSmsSendStatusByPhoneNumberResult {}

export interface PullSmsReplyStatusByPhoneNumberResult extends Result {
  PullSmsReplyStatusSet: Array<PullSmsReplyStatus>
}
export interface PullSmsReplyStatusResult extends PullSmsReplyStatusByPhoneNumberResult {}



export interface PullSmsSendStatusByPhoneNumberParams extends ListParams, PhoneNumber, SendEndDateTime, SmsSdkAppid {}

export interface PullSmsSendStatusParams extends SmsSdkAppid {
  Limit: number;
}

export interface PullSmsReplyStatusByPhoneNumberParams extends PullSmsSendStatusByPhoneNumberParams {}

export interface PullSmsReplyStatusParams extends PullSmsSendStatusParams {}