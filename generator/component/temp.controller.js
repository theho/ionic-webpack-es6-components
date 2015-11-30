class <%= upCaseName %>Controller {

  /*@ngInject*/
  constructor($log, $state, $scope, $q, <%= upCaseName %>Service) {
		this.name = '<%= name %>';

    // Services
    this.$log = $log;
    this.$state = $state;
    this.$scope = $scope;
    this.$q = $q;
		this.<%= upCaseName %>Service = <%= upCaseName %>Service;

    // Variables

	}

	sayHello() {
    var self = this;
    this.hello = this.<%= upCaseName %>Service.sayHello();
  }

}

export default <%= upCaseName %>Controller;
