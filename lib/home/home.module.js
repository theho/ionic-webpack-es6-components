import uiRouter from 'angular-ui-router';

import homeConfig from './home.config';
import HomeController from './home.controller';


let homeModule = angular.module('main.home', [
  uiRouter
])
  .config(homeConfig)
  .controller('HomeController', HomeController)


export default homeModule;
