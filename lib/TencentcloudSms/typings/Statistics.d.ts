import { ListParams, SmsSdkAppidParams, Result, IntervalDateTimeParams } from "./base";


export interface SmsPackagesStatistics {
  PackageCreateTime: string;
  PackageCreateUnixTime: number;
  PackageEffectiveTime: string;
  PackageEffectiveUnixTime: number;
  PackageExpiredTime: string;
  PackageExpiredUnixTime: number;
  AmountOfPackage: number;
  TypeOfPackage: number;
  PackageId: number;
  CurrentUsage: number;
}

export interface SendStatusStatistics {
  FeeCount: number;
  RequestCount: number;
  RequestSuccessCount: number;
}

export interface CallbackStatusStatistics {
  CallbackCount: number;
  RequestSuccessCount: number;
  CallbackFailCount: number;
  CallbackSuccessCount: number;
  InternalErrorCount: number;
  InvalidNumberCount: number;
  ShutdownErrorCount: number;
  BlackListCount: number;
  FrequencyLimitCount: number;
}

export interface SmsPackagesStatisticsResult extends Result {
  SmsPackagesStatisticsSet: Array<SmsPackagesStatistics>
}

export interface SendStatusStatisticsResult extends Result {
  SendStatusStatistics: SendStatusStatistics
}
export interface CallbackStatusStatisticsResult extends Result {
  CallbackStatusStatistics: CallbackStatusStatistics
}


export interface SmsPackagesStatisticsParams extends ListParams, SmsSdkAppidParams {}

export interface SendStatusStatisticsParams extends ListParams, SmsSdkAppidParams, IntervalDateTimeParams {}

export interface CallbackStatusStatisticsParams extends ListParams, SmsSdkAppidParams, IntervalDateTimeParams {}