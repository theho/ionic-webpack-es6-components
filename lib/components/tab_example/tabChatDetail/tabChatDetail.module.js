import uiRouter from 'angular-ui-router';

import tabChatDetailConfig from './tabChatDetail.config.js';

import TabChatDetailController from './tabChatDetail.controller.js';


var tabChatDetailModule = angular.module('main.tabChatDetail', [
  uiRouter
]);

register(tabChatDetailModule.name)
  .config(tabChatDetailConfig)
  .controller('TabChatDetailController', TabChatDetailController)


export default tabChatDetailModule;
