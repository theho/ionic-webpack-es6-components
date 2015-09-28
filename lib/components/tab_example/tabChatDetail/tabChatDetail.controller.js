class TabChatDetailController {

  /*@ngInject*/
  constructor() {
		this.name = 'tabChatDetail';
	}

	sayHello() {
    this.hello = this.TabChatDetailService.sayHello();
  }

}

export default TabChatDetailController;