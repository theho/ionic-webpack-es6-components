import modConfig from './menu.config';
import menuController from './menu.controller';

let mod = angular.module('main.menu', [
    'ionic',
    'ui.router'
  ])
    .config(modConfig)
    .controller('menuController', menuController)
  ;

export default mod;
