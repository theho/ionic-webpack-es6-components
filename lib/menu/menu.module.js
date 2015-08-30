import modConfig from './menu.config';
import menuController from './menu.controller';

let createModule = function (namespace) {
  let mod = angular.module(namespace + '.menu', [
      'ionic',
      'ui.router'
    ])
      .config(modConfig)
      .controller('menuController', menuController)
    ;
  return mod.name;
}

export default createModule;
