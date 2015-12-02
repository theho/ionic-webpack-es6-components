class MenuController {

  /*@ngInject*/
  constructor($log, $ionicSideMenuDelegate) {
    this.name = 'menu';
    this.$log = $log;
    this.$ionicSideMenuDelegate = $ionicSideMenuDelegate;
  }

  menuClose(){
    this.$ionicSideMenuDelegate.toggleLeft()
  }
}

export default MenuController;
