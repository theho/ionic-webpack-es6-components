import defaultConfig from '../config/default.config.json';
import localConfig from '../config/config.json';
import deepExtend from 'deep-extend';

let config = deepExtend(defaultConfig, localConfig);


let mod = angular.module('main.constant', []).constant('CONFIG', config);

export default mod;
