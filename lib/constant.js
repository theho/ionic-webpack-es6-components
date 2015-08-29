import defaultConfig from '../config/default.config.json';
import localConfig from '../config/config.json';
import deepExtend from 'deep-extend';

let config = deepExtend(defaultConfig, localConfig);

let createModule = function (namespace) {

  let mod = angular.module(namespace + '.constant', []).constant('CONFIG', config);
  return mod.name
}

export default createModule;
