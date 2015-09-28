export default function ($stateProvider) {
  'ngInject';
  return $stateProvider.state('root', {
    url: '',
    abstract: true,
    views: {
      '@': {
        template: require('./tabs.html')
      }
    }
  });
}


