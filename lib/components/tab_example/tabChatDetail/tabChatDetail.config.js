export default function ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('root.tabchatdetail', {
      url: "/tabchatdetail",
      views: {
        'tab-chats': {
          template: require("./tabChatDetail.html"),
          controller: "TabChatDetailController as vm"
        }
      }
    })
  ;
  //$urlRouterProvider.otherwise("/tabChatDetail");
}
