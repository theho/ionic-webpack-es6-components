class <%= upCaseName %>Service {
	/*@ngInject*/
	constructor($log, $q){
		this.name = '<%= name %>';
    this.$log = $log
		this.$q = $q
	}

	sayHello() {
       'hello';
    }
}

export default <%= upCaseName %>Service;
