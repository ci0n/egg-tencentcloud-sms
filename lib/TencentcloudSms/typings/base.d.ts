export interface ListParams {
  Limit: number;
  Offset: number;
}
export interface SmsSdkAppidParams {
  SmsSdkAppid: string;
}

export interface IntervalDateTimeParams {
  StartDateTime: number;
  EndDataTime: number;
}

export interface Result {
  RequestId: string;
}


export type International = 0 | 1
export type UsedMethod = 0 | 1
export type StatusCode = 0 | 1 | -1
