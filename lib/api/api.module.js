import 'restangular';
import 'satellizer';
import uiRouter from 'angular-ui-router';
import apiConfig from './api.config';


import ApiService from './api.service';
import ApiUsersService from './api.users.service';


let apiModule = angular.module('main.api', [
    uiRouter,
    'restangular',
    'satellizer',
  ])
    .config(apiConfig)
    .service('ApiService', ApiService)
    .service('ApiUsersService', ApiUsersService)
  ;


export default apiModule;
