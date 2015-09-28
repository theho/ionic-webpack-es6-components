export default function ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('root.tabchats', {
      url: "/tabchats",
      views: {
        'tab-chats': {
          template: require("./tabChats.html"),
          controller: "TabChatsController as vm"
        }
      }
    })
  ;
  //$urlRouterProvider.otherwise("/tabChats");
}
