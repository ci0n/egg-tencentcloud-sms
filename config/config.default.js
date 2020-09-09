'use strict';

/**
 * egg-tencentcloud-sms default config
 * @member Config#tencentcloudSms
 * @property {String} secretID - secert id. see https://console.cloud.tencent.com/cam/capi
 * @property {String} secretKEY - secert key. see https://console.cloud.tencent.com/cam/capi
 * @property {String} version - Public parameters. see https://cloud.tencent.com/document/product/382/38778
 * @property {number} SmsSdkAppid - sms sdk appid. see https://console.cloud.tencent.com/smsv2/app-manage
 */
exports.tencentcloudSms = {
  secretID: '',
  secretKEY: '',
  Version: 'v20190711',
  SmsSdkAppid: 0,
};
