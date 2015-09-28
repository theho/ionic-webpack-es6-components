export default function ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('root.tabaccount', {
      url: "/tabaccount",
      views: {
        'tab-account': {
          template: require("./tabAccount.html"),
          controller: "TabAccountController as vm"
        }
      }
    })
  ;
  //$urlRouterProvider.otherwise("/tabAccount");
}
