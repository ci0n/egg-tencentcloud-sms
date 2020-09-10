import TencentcloudSms from './lib/TencentcloudSms/typings/index'


export interface TencentcloudSmsConfig {
  secretID: string,
  secretKEY: string,
  Version?: string,
  SmsSdkAppid?: number | string,
}

declare module 'egg' {
  interface Application {
    tencentcloudSms: TencentcloudSms
  }

  interface EggAppConfig {
    tencentcloudSms: TencentcloudSmsConfig
  }
}