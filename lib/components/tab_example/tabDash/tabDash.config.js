export default function ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('root.tabdash', {
      url: "/tabdash",
      views: {
        'tab-dash': {
          template: require("./tabDash.html"),
          controller: "TabDashController as vm"
        }
      }
    })
  ;
  $urlRouterProvider.otherwise("/home");
}
