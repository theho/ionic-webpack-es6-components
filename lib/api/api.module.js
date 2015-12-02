import 'restangular';
import 'satellizer';


import ApiService from './api.service';
import ApiUsersService from './api.users.service';


let apiModule = angular.module('main.api', [
    'restangular',
    'satellizer',
  ])
    .service('ApiService', ApiService)
    .service('ApiUsersService', ApiUsersService)
  ;


export default apiModule;
