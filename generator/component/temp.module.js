import uiRouter from 'angular-ui-router';

import <%= name %>Config from './<%= name %>.config';
import <%= upCaseName %>Controller from './<%= name %>.controller';
import <%= name %>Directive from './<%= name %>.directive';
import <%= upCaseName %>Service from './<%= name %>.service';

import './<%= name %>.scss';


var <%= name %>Module = angular.module('<%= namespace %>.<%= name %>', [
  uiRouter,
]);

register(<%= name %>Module.name)
  .config(<%= name %>Config)
  .controller('<%= upCaseName %>Controller', <%= upCaseName %>Controller)
  .directive('<%= name %>', <%= name %>Directive)
  .service('<%= upCaseName %>Service', <%= upCaseName %>Service);


export default <%= name %>Module;
