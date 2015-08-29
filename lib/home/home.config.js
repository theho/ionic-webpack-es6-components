export default function ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('root.home', {
      url: "/home",
      views: {
        'content@root': {
          template: require("./home.html"),
          controller: "homeController as vm"
        }
      }
    })
  ;
  $urlRouterProvider.otherwise("/home");
}
