class <%= upCaseName %>Service {
	/*@ngInject*/
	constructor(){
		this.name = '<%= name %>';
	}

	sayHello() {
    return 'hello';
  }
}

export default <%= upCaseName %>Service;