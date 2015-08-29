import uiRouter from 'angular-ui-router';

import <%= name %>Config from './<%= name %>.config';

import <%= name %>Directive from './<%= name %>.directive';
import <%= name %>Controller from './<%= name %>.controller';
import <%= upCaseName %>Service from './<%= name %>.service';


let createModule = function (namespace) {
  let <%= name %>Module = angular.module(namespace + '.<%= name %>', [
    uiRouter
  ])
    .config(<%= name %>Config)
    .directive('<%= name %>', () => new <%= name %>Directive())
    .controller('<%= name %>Controller', <%= name %>Controller)
    .service('<%= upCaseName %>Service', <%= upCaseName %>Service);

  return <%= name %>Module.name
}

export default createModule;
