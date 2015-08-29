import 'restangular';
import 'satellizer';
import uiRouter from 'angular-ui-router';
import apiConfig from './api.config';


import ApiService from './api.service';
import ApiUsersService from './api.users.service';


let createModule = function (namespace) {
  let apiModule = angular.module(namespace + '.api', [
      uiRouter,
      'restangular',
      'satellizer',
    ])
      .config(apiConfig)
      .service('ApiService', ApiService)
      .service('ApiUsersService', ApiUsersService)
    ;

  return apiModule.name
}

export default createModule;
