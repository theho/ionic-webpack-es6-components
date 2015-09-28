import uiRouter from 'angular-ui-router';

import tabDashConfig from './tabDash.config.js';

import TabDashController from './tabDash.controller.js';


var tabDashModule = angular.module('main.tabDash', [
  uiRouter
]);

register(tabDashModule.name)
  .config(tabDashConfig)
  .controller('TabDashController', TabDashController)


export default tabDashModule;
