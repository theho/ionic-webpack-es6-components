import modConfig from './menu.config';

let createModule = function (namespace) {
    let mod = angular.module(namespace + '.menu', [
        'ionic',
        'ui.router'
    ]);
    mod.config(modConfig);
    return mod.name;
}

export default createModule;
