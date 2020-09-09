# egg-tencentcloud-sms

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-tencentcloud-sms.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-tencentcloud-sms
[travis-image]: https://img.shields.io/travis/ci0n/egg-tencentcloud-sms.svg?style=flat-square
[travis-url]: https://travis-ci.org/ci0n/egg-tencentcloud-sms
[codecov-image]: https://img.shields.io/codecov/c/github/ci0n/egg-tencentcloud-sms.svg?style=flat-square
[codecov-url]: https://codecov.io/github/ci0n/egg-tencentcloud-sms?branch=master
[david-image]: https://img.shields.io/david/ci0n/egg-tencentcloud-sms.svg?style=flat-square
[david-url]: https://david-dm.org/ci0n/egg-tencentcloud-sms
[snyk-image]: https://snyk.io/test/npm/egg-tencentcloud-sms/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-tencentcloud-sms
[download-image]: https://img.shields.io/npm/dm/egg-tencentcloud-sms.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-tencentcloud-sms



See [tencent cloud sms documents](https://cloud.tencent.com/document/product/382/38764) for more help

**WARNING: Not tested yet, use it carefully**

## Install

```bash
$ npm i egg-tencentcloud-sms --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.tencentcloudSms = {
  enable: true,
  package: 'egg-tencentcloud-sms',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.tencentcloudSms = {
  secretID: 'you tencent cloud secret id',
  secretKEY: 'you tencent cloud secret key',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
this.app.tencentSms.SendSms({
  PhoneNumberSet: '+8613211112222',
  TemplateID: 123123,
  SmsSdkAppid: 123123,
  Sign: 'sign content',
})
.then((res) => {
  // do someting...
})
.catch((err) => {
  err.message
  err.code
  err.requestId
  err.getMessage()
  err.getRequestId()
})

```

## Questions & Suggestions

Please open an issue [here](https://github.com/ci0n/egg-tencentcloud-sms/issues).

## License

[MIT](LICENSE)
