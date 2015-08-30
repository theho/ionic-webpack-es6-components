import uiRouter from 'angular-ui-router';

import <%= name %>Config from './<%= name %>.config';

import <%= name %>Directive from './<%= name %>.directive';
import <%= upCaseName %>Controller from './<%= name %>.controller';
import <%= upCaseName %>Service from './<%= name %>.service';


let <%= name %>Module = angular.module('<%= namespace %>.<%= name %>', [
  uiRouter
])
  .config(<%= name %>Config)
  .directive('<%= name %>', () => new <%= name %>Directive())
  .controller('<%= upCaseName %>Controller', <%= upCaseName %>Controller)
  .service('<%= upCaseName %>Service', <%= upCaseName %>Service);


export default <%= name %>Module;
