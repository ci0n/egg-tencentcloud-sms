'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.tencentcloudSms.name;
  }
}

module.exports = HomeController;
