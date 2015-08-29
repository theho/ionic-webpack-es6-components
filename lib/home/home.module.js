import uiRouter from 'angular-ui-router';

import homeConfig from './home.config';

import homeController from './home.controller';


let createModule = function (namespace) {
  let homeModule = angular.module(namespace + '.home', [
    uiRouter
  ])
    .config(homeConfig)
    .controller('homeController', homeController)

  return homeModule.name
}

export default createModule;
