class TabDashController {

  /*@ngInject*/
  constructor() {
		this.name = 'tabDash';
	}

	sayHello() {
    this.hello = this.TabDashService.sayHello();
  }

}

export default TabDashController;