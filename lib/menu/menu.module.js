import uiRouter from 'angular-ui-router';

import menuConfig from './menu.config';
import MenuController from './menu.controller';
import './menu.scss';

var menuModule = angular.module('main.menu', [
  uiRouter
]);

register(menuModule.name)
  .config(menuConfig)
  .controller('MenuController', MenuController)


export default menuModule;
