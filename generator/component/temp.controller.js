class <%= name %>Controller {
  /*@ngInject*/

  constructor(<%= upCaseName %>Service) {
		this.name = '<%= name %>';

		this.<%= upCaseName %>Service = <%= upCaseName %>Service;
	}

	sayHello() {
    this.hello = this.<%= upCaseName %>Service.sayHello();
  }

}


export default <%= name %>Controller;