import { Result, International, UsedMethod, StatusCode } from "./base";

export interface SignId {
  SignId: number;
}

export interface ModifySignStatus extends SignId {
  SignApplyId: string;
}
export interface DeleteSignStatus {
  DeleteStatus: string;
  DeleteTime: string;
}
export interface DescribeSignListStatus {
  International: International;
  StatusCode: StatusCode;
  ReviewReply: string;
  SignName: string;
  CreateTime: number;
}



export interface AddSmsSignResult extends Result {
  ModifySignStatus: ModifySignStatus
}
export interface ModifySmsSignResult extends AddSmsSignResult {}
export interface DeleteSmsSignResult extends Result {
  DeleteSignStatus: DeleteSignStatus
}
export interface DescribeSmsSignListResult extends Result {
  DescribeSignListStatusSet: Array<DescribeSignListStatus>
}


export interface AddSmsSignParams {
  SignName: string;
  SignType: number;
  DocumentType: number;
  International: International;
  UsedMethod: UsedMethod;
  ProofImage: string;
  CommissionImage: string;
  Remark: string;
}
export interface ModifySmsSignParams extends SignId, AddSmsSignParams {}
export interface DeleteSmsSignParams extends SignId {}
export interface DescribeSmsSignListParams extends Result {
  SignIdSet: Array<number>;
  International: International;
}
