import { Result, International, StatusCode } from "./base";

export interface ModifyTemplateStatus {
  TemplateId: number;
}
export interface AddTemplateStatus extends ModifyTemplateStatus {}
export interface DeleteTemplateStatus {
  DeleteStatus: string;
  DeleteTime: string;
}
export interface DescribeTemplateListStatus {
  International: International;
  StatusCode: StatusCode;
  ReviewReply: string;
  TemplateName: string;
  CreateTime: number;
}

export interface ModifySmsTemplateResult extends Result {
  ModifyTemplateStatus: ModifyTemplateStatus
}
export interface DeleteSmsTemplateResult extends Result {
  DeleteTemplateStatus: DeleteTemplateStatus
}
export interface AddSmsTemplateResult extends Result {
  AddTemplateStatus: AddTemplateStatus
}
export interface DescribeSmsTemplateListResult extends Result {
  DescribeTemplateStatusSet: Array<DescribeTemplateListStatus>;
}




export interface AddSmsTemplateParams {
  TemplateName: string;
  TemplateContent: string;
  SmsType: 0 | 1;
  International: International;
  Remark: string;
}
export interface ModifySmsTemplateParams extends AddSmsTemplateParams, ModifyTemplateStatus {}
export interface DeleteSmsTemplateParams extends ModifyTemplateStatus {}
export interface DescribeSmsTemplateListParams {
  TemplateIdSet: Array<number>;
  International: International;
}