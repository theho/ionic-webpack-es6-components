//inspired from: http://www.michaelbromley.co.uk/blog/350/exploring-es6-classes-in-angularjs-1-x#_section-directives

import template from './<%= name %>.html';
import './<%= name %>.scss';


class <%= name %>Directive {
  /*@ngInject*/

  constructor() {
    this.template = template;
    this.restrict = 'E';
    this.controller = '<%= upCaseName %>Controller';
    this.controllerAs = 'vm';
    this.bindToController = true
    this.scope = {

    }
    // etc. for the usual config options

    // allows us to use the injected dependencies
    // elsewhere in the directive (e.g. compile or link function)
  }

  // optional compile function
  compile(tElement) {
    //tElement.css('position', 'absolute');
  }

  // optional link function
  link(scope, element) {
    //this.$interval(() => this.move(element), 1000);
  }
}

export default <%= name %>Directive;