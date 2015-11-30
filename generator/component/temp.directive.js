//inspired from: http://www.michaelbromley.co.uk/blog/350/exploring-es6-classes-in-angularjs-1-x#_section-directives

import template from './<%= name %>.html';


class <%= name %>Directive {
  /*@ngInject*/

  constructor() {
    this.template = template;
    this.restrict = 'E';
    this.controller = '<%= upCaseName %>Controller';
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.scope = {

    }
  }
}

export default <%= name %>Directive;
