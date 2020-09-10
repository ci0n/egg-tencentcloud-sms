'use strict';

const sdk = require('tencentcloud-sdk-nodejs');

const { Credential, HttpProfile, ClientProfile } = sdk.common;


const API_NAMES = {
  DescribeSmsTemplateList: 'DescribeSmsTemplateList',
  AddSmsTemplate: 'AddSmsTemplate',
  DeleteSmsTemplate: 'DeleteSmsTemplate',
  ModifySmsTemplate: 'ModifySmsTemplate',
  DescribeSmsSignList: 'DescribeSmsSignList',
  AddSmsSign: 'AddSmsSign',
  DeleteSmsSign: 'DeleteSmsSign',
  ModifySmsSign: 'ModifySmsSign',
  SendSms: 'SendSms',
  PullSmsReplyStatus: 'PullSmsReplyStatus',
  PullSmsReplyStatusByPhoneNumber: 'PullSmsReplyStatusByPhoneNumber',
  PullSmsSendStatus: 'PullSmsSendStatus',
  PullSmsSendStatusByPhoneNumber: 'PullSmsSendStatusByPhoneNumber',
  SmsPackagesStatistics: 'SmsPackagesStatistics',
  SendStatusStatistics: 'SendStatusStatistics',
  CallbackStatusStatistics: 'CallbackStatusStatistics',
};

module.exports = class TencentcloudSms {

  constructor(app) {
    this.app = app;

    const appConfig = app.config.tencentcloudSms || {};
    const defaultConfig = {
      secretID: undefined,
      secretKEY: undefined,
      SmsSdkAppid: undefined,
      Version: 'v20190711',
    };

    const config = Object.assign({}, defaultConfig, appConfig);
    this.config = config;

    if (!config.secretID || !config.secretKEY) {
      throw new Error('[TencentcloudSms] secretID or secretKEY cannot be empty');
    }
  }

  /**
   * 用户套餐包信息统计
   * https://cloud.tencent.com/document/product/382/39533
   *
   * @param {any} params 参数
   * @param {number} params.Limit 最大上限(需要拉取的套餐包个数)
   * @param {number} params.Offset 偏移量，目前固定设置为 0
   * @param {number} params.SmsSdkAppid 可选，短信SdkAppid，默认 config.tencentcloudSms.SmsSdkAppid
   */
  SmsPackagesStatistics(params) {
    if (!params.SmsSdkAppid && this.config.SmsSdkAppid) {
      params = { ...params, SmsSdkAppid: this.config.SmsSdkAppid };
    }
    return this._request(API_NAMES.SmsPackagesStatistics, params);
  }

  /**
   * 发送短信数据统计
   * @param {any} params 参数
   * @param {number} params.StartDateTime 拉取起始时间，yyyymmddhh 需要拉取的起始时间，精确到小时
   * @param {number} params.EndDataTime 结束时间，yyyymmddhh 需要拉取的截止时间，精确到小时
   * @param {number} params.Limit 最大上限
   * @param {number} params.Offset 偏移量，目前固定设置为 0
   * @param {number} params.SmsSdkAppid 可选，短信SdkAppid，默认 config.tencentcloudSms.SmsSdkAppid
   */
  SendStatusStatistics(params) {
    if (!params.SmsSdkAppid && this.config.SmsSdkAppid) {
      params = { ...params, SmsSdkAppid: this.config.SmsSdkAppid };
    }
    return this._request(API_NAMES.SendStatusStatistics, params);
  }

  /**
   * 回执数据统计
   * @param {any} params 参数
   * @param {number} params.StartDateTime 拉取起始时间，yyyymmddhh 需要拉取的起始时间，精确到小时
   * @param {number} params.EndDataTime 结束时间，yyyymmddhh 需要拉取的截止时间，精确到小时
   * @param {number} params.Limit 最大上限
   * @param {number} params.Offset 偏移量，目前固定设置为 0
   * @param {number} params.SmsSdkAppid 可选，短信SdkAppid，默认 config.tencentcloudSms.SmsSdkAppid
   */
  CallbackStatusStatistics(params) {
    if (!params.SmsSdkAppid && this.config.SmsSdkAppid) {
      params = { ...params, SmsSdkAppid: this.config.SmsSdkAppid };
    }
    return this._request(API_NAMES.CallbackStatusStatistics, params);
  }

  /**
   * 拉取单个号码短信下发状态
   * @param {any} params 参数
   * @param {String} params.PhoneNumber 最大上限下发目的手机号码，依据 e.164 标准为：+[国家（或地区）码][手机号]
   * @param {number} params.SendDateTime 拉取起始时间，UNIX 时间戳（时间：秒），最大可拉取当前时期7天前的数据
   * @param {number} params.Limit 拉取最大条数，最多 100
   * @param {number} params.Offset 偏移量，目前固定设置为 0
   * @param {number} params.SmsSdkAppid 短信SdkAppid，默认 config.tencentcloudSms.SmsSdkAppid
   * @param {number} params.EndDataTime 可选，结束时间，yyyymmddhh 需要拉取的截止时间，精确到小时
   */
  PullSmsSendStatusByPhoneNumber(params) {
    if (!params.SmsSdkAppid && this.config.SmsSdkAppid) {
      params = { ...params, SmsSdkAppid: this.config.SmsSdkAppid };
    }
    return this._request(API_NAMES.PullSmsSendStatusByPhoneNumber, params);
  }

  /**
   * 拉取短信下发状态
   * @param {any} params 参数
   * @param {number} params.Limit 拉取最大条数，最多 100
   * @param {number} params.SmsSdkAppid 短信SdkAppid，默认 config.tencentcloudSms.SmsSdkAppid
   */
  PullSmsSendStatus(params) {
    if (!params.SmsSdkAppid && this.config.SmsSdkAppid) {
      params = { ...params, SmsSdkAppid: this.config.SmsSdkAppid };
    }
    return this._request(API_NAMES.PullSmsSendStatus, params);
  }

  /**
   * 拉取单个号码短信回复状态
   * @param {any} params 参数
   * @param {String} params.PhoneNumber 最大上限下发目的手机号码，依据 e.164 标准为：+[国家（或地区）码][手机号]
   * @param {number} params.SendDateTime 拉取起始时间，UNIX 时间戳（时间：秒），最大可拉取当前时期7天前的数据
   * @param {number} params.Limit 拉取最大条数，最多 100
   * @param {number} params.Offset 偏移量，目前固定设置为 0
   * @param {number} params.SmsSdkAppid 短信SdkAppid，默认 config.tencentcloudSms.SmsSdkAppid
   * @param {number} params.EndDataTime 可选，结束时间，yyyymmddhh 需要拉取的截止时间，精确到小时
   */
  PullSmsReplyStatusByPhoneNumber(params) {
    if (!params.SmsSdkAppid && this.config.SmsSdkAppid) {
      params = { ...params, SmsSdkAppid: this.config.SmsSdkAppid };
    }
    return this._request(API_NAMES.PullSmsReplyStatusByPhoneNumber, params);
  }

  /**
   * 拉取短信回复状态
   * @param {any} params 参数
   * @param {number} params.Limit 拉取最大条数，最多 100
   * @param {number} params.SmsSdkAppid 短信SdkAppid，默认 config.tencentcloudSms.SmsSdkAppid
   */
  PullSmsReplyStatus(params) {
    if (!params.SmsSdkAppid && this.config.SmsSdkAppid) {
      params = { ...params, SmsSdkAppid: this.config.SmsSdkAppid };
    }
    return this._request(API_NAMES.PullSmsReplyStatus, params);
  }

  /**
   * 发送短信
   * @param {any} params 参数
   * @param {string|Array<string>} params.PhoneNumberSet 下发手机号码，采用 e.164 标准，格式为+[国家或地区码][手机号]，最多支持200个
   * @param {number} params.TemplateID 模板 ID，必须填写已审核通过的模板 ID
   * @param {number} params.SmsSdkAppid 短信SdkAppid，默认 config.tencentcloudSms.SmsSdkAppid
   * @param {string} params.Sign 可选，短信签名内容，使用 UTF-8 编码，必须填写已审核通过的签名
   * @param {string|Array<string>|Array<number>} params.TemplateParamSet 可选，模板参数，若无模板参数，则设置为空
   * @param {string} params.ExtendCode 可选，短信码号扩展号，默认未开通
   * @param {string} params.SessionContext 可选，用户的 session 内容，可以携带用户侧 ID 等上下文信息，server 会原样返回
   * @param {string} params.SenderId 可选，国际/港澳台短信 senderid，国内短信填空，默认未开通
   */
  SendSms(params) {
    if (!params.SmsSdkAppid && this.config.SmsSdkAppid) {
      params = { ...params, SmsSdkAppid: this.config.SmsSdkAppid };
    }
    return this._request(API_NAMES.SendSms, params);
  }

  /**
   * 修改短信签名
   * @param {any} params 参数
   * @param {number} params.SenderId 待修改的签名 ID
   * @param {string} params.SignName 签名名称
   * @param {number} params.SignType 签名类型，参数详情请看 https://cloud.tencent.com/document/product/382/41144
   * @param {number} params.DocumentType 证明类型，参数详情请看 https://cloud.tencent.com/document/product/382/41144
   * @param {number} params.International 是否国际/港澳台短信 0:国内短信，1国际/港澳台短信
   * @param {number} params.UsedMethod 签名用途 0:自用 1:他用
   * @param {string} params.ProofImage 签名对应的资质证明图片，参数详情请看 https://cloud.tencent.com/document/product/382/41144
   * @param {number} params.CommissionImage 签名名称 委托授权证明，参数详情请看 https://cloud.tencent.com/document/product/382/41144
   * @param {number} params.Remark 可选，签名的申请备注
   */
  ModifySmsSign(params) {
    return this._request(API_NAMES.ModifySmsSign, params);
  }

  /**
   * 删除短信签名
   * @param {any} params 参数
   * @param {number} params.SenderId 待删除的签名 ID
   */
  DeleteSmsSign(params) {
    return this._request(API_NAMES.DeleteSmsSign, params);
  }

  /**
   * 添加短信签名
   * @param {any} params 参数
   * @param {string} params.SignName 签名名称
   * @param {number} params.SignType 签名类型，参数详情请看 https://cloud.tencent.com/document/product/382/41144
   * @param {number} params.DocumentType 证明类型，参数详情请看 https://cloud.tencent.com/document/product/382/41144
   * @param {number} params.International 是否国际/港澳台短信 0:国内短信，1国际/港澳台短信
   * @param {number} params.UsedMethod 签名用途 0:自用 1:他用
   * @param {string} params.ProofImage 签名对应的资质证明图片，参数详情请看 https://cloud.tencent.com/document/product/382/41144
   * @param {number} params.CommissionImage 签名名称 委托授权证明，参数详情请看 https://cloud.tencent.com/document/product/382/41144
   * @param {number} params.Remark 可选，签名的申请备注
   */
  AddSmsSign(params) {
    return this._request(API_NAMES.AddSmsSign, params);
  }

  /**
   * 短信签名状态查询
   * @param {any} params 参数
   * @param {number|Array<number>} params.SignIdSet 签名 ID 数组
   * @param {number} params.International 是否国际/港澳台短信 0:国内短信，1国际/港澳台短信
   */
  DescribeSmsSignList(params) {
    return this._request(API_NAMES.DescribeSmsSignList, params);
  }


  /**
   * 修改短信模板
   * @param {any} params 参数
   * @param {number} params.TemplateID 待修改的模板 ID
   * @param {string} params.TemplateName 新的模板名称
   * @param {string} params.TemplateContent 新的模板内容
   * @param {number} params.SmsType 短信类型，0:普通短信, 1:营销短信
   * @param {number} params.International 是否国际/港澳台短信 0:国内短信，1国际/港澳台短信
   * @param {number} params.Remark 模板备注，例如申请原因，使用场景等
   */
  ModifySmsTemplate(params) {
    return this._request(API_NAMES.ModifySmsTemplate, params);
  }


  /**
   * 删除短信模板
   * @param {any} params 参数
   * @param {number} params.TemplateID 待删除的模板 ID
   */
  DeleteSmsTemplate(params) {
    return this._request(API_NAMES.DeleteSmsTemplate, params);
  }

  /**
   * 添加短信模板
   * @param {any} params 参数
   * @param {string} params.TemplateName 模板名称
   * @param {string} params.TemplateContent 模板内容
   * @param {number} params.SmsType 短信类型，0:普通短信, 1:营销短信
   * @param {number} params.International 是否国际/港澳台短信 0:国内短信，1国际/港澳台短信
   * @param {number} params.Remark 模板备注，例如申请原因，使用场景等
   */
  AddSmsTemplate(params) {
    return this._request(API_NAMES.AddSmsTemplate, params);
  }


  /**
   * 短信模板状态查询
   * @param {any} params 参数
   * @param {number|Array<number>} params.TemplateIdSet 模板 ID 数组
   * @param {number} params.International 是否国际/港澳台短信 0:国内短信，1国际/港澳台短信
   */
  DescribeSmsTemplateList(params) {
    return this._request(API_NAMES.DescribeSmsTemplateList, params);
  }


  /**
   * 发送请求
   * @param {string} name 接口名称，必须是文档的接口名称(Action)
   * @param {any} params 参数
   */
  _request(name, params = {}) {
    const { Models } = sdk.sms[this.config.Version];
    const req = new Models[name + 'Request']();
    req.from_json_string(JSON.stringify(params));

    const client = this._client();

    return new Promise((resolve, reject) => {
      client[name](req, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.to_json_string());
        }
      });
    });
  }

  _cred() {
    const { secretID, secretKEY } = this.config;
    return new Credential(secretID, secretKEY);
  }

  _client() {
    const httpProfile = new HttpProfile();
    httpProfile.endpoint = 'sms.tencentcloudapi.com';

    const clientProfile = new ClientProfile();
    clientProfile.httpProfile = httpProfile;

    const { Client } = sdk.sms[this.config.Version];

    return new Client(this._client(), '', clientProfile);
  }


};
