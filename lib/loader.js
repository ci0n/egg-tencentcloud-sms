'use strict';

const TencentcloudSms = require('./TencentcloudSms/TencentcloudSms');

module.exports = app => {
  app.tencentcloudSms = new TencentcloudSms(app, app.config.tencentcloudSms);
};
