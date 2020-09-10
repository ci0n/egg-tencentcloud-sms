
import { SmsPackagesStatisticsParams, SmsPackagesStatisticsResult, SendStatusStatisticsParams, SendStatusStatisticsResult, CallbackStatusStatisticsParams } from "./Statistics";
import { PullSmsSendStatusByPhoneNumberParams, PullSmsSendStatusByPhoneNumberResult, PullSmsSendStatusResult, PullSmsSendStatusParams, PullSmsReplyStatusByPhoneNumberParams, PullSmsReplyStatusByPhoneNumberResult, PullSmsReplyStatusParams, PullSmsReplyStatusResult } from "./Pull";
import { SendSmsParams, SendSmsResult } from "./Send";
import { ModifySmsSignParams, DeleteSmsSignParams, AddSmsSignParams, DescribeSmsSignListParams, AddSmsSignResult, DeleteSmsSignResult, ModifySmsSignResult, DescribeSmsSignListResult } from "./Sign";
import { ModifySmsTemplateParams, DeleteSmsTemplateParams, AddSmsTemplateParams, DescribeSmsTemplateListParams, AddSmsTemplateResult, DeleteSmsTemplateResult, ModifySmsTemplateResult, DescribeSmsTemplateListResult } from "./Template";

export default class TencentcloudSms {
  SmsPackagesStatistics(params: SmsPackagesStatisticsParams): Promise<SmsPackagesStatisticsResult>
  SendStatusStatistics(params: SendStatusStatisticsParams): Promise<SendStatusStatisticsResult>
  CallbackStatusStatistics(params: CallbackStatusStatisticsParams): Promise<CallbackStatusStatisticsParams>

  PullSmsSendStatusByPhoneNumber(params: PullSmsSendStatusByPhoneNumberParams): Promise<PullSmsSendStatusByPhoneNumberResult>
  PullSmsSendStatus(params: PullSmsSendStatusParams): Promise<PullSmsSendStatusResult>
  PullSmsReplyStatusByPhoneNumber(params: PullSmsReplyStatusByPhoneNumberParams): Promise<PullSmsReplyStatusByPhoneNumberResult>
  PullSmsReplyStatus(params: PullSmsReplyStatusParams): Promise<PullSmsReplyStatusResult>

  SendSms(params: SendSmsParams): Promise<SendSmsResult>

  ModifySmsSign(params: ModifySmsSignParams): Promise<ModifySmsSignResult>
  DeleteSmsSign(params: DeleteSmsSignParams): Promise<DeleteSmsSignResult>
  AddSmsSign(params: AddSmsSignParams): Promise<AddSmsSignResult>
  DescribeSmsSignList(params: DescribeSmsSignListParams): Promise<DescribeSmsSignListResult>

  ModifySmsTemplate(params: ModifySmsTemplateParams): Promise<ModifySmsTemplateResult>
  DeleteSmsTemplate(params: DeleteSmsTemplateParams): Promise<DeleteSmsTemplateResult>
  AddSmsTemplate(params: AddSmsTemplateParams): Promise<AddSmsTemplateResult>
  DescribeSmsTemplateList(params: DescribeSmsTemplateListParams): Promise<DescribeSmsTemplateListResult>
}