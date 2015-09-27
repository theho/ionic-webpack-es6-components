import uiRouter from 'angular-ui-router';

import <%= name %>Config from './<%= name %>.config';

import <%= name %>Directive from './<%= name %>.directive';
import <%= upCaseName %>Controller from './<%= name %>.controller';
import <%= upCaseName %>Service from './<%= name %>.service';


var <%= name %>Module = angular.module('<%= namespace %>.<%= name %>', [
  uiRouter
]);

register(<%= name %>Module.name)
  .config(<%= name %>Config)
  .directive('<%= name %>', <%= name %>Directive)
  .controller('<%= upCaseName %>Controller', <%= upCaseName %>Controller)
  .service('<%= upCaseName %>Service', <%= upCaseName %>Service);


export default <%= name %>Module;
