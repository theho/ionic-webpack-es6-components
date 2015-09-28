class TabChatsController {

  /*@ngInject*/
  constructor() {
		this.name = 'tabChats';
	}

	sayHello() {
    this.hello = this.TabChatsService.sayHello();
  }

}

export default TabChatsController;