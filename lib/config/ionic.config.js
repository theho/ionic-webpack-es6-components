export default function ($ionicConfigProvider) {
  'ngInject';
  $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-left');

  //$ionicConfigProvider.views.maxCache(CONFIG.cache.views || 10);
  //$ionicConfigProvider.views.forwardCache(CONFIG.cache.forward || false);
  //$ionicConfigProvider.scrolling.jsScrolling(false);
}
