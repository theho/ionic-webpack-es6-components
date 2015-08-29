class ApiService {
  /*@ngInject*/
  constructor(Restangular, $auth, CONFIG) {
    this.name = 'api';
    return Restangular.withConfig(
      function (RestangularConfigurer) {
        //RestangularConfigurer.setRequestSuffix('/')

        RestangularConfigurer.setBaseUrl(CONFIG.api.url);
        RestangularConfigurer.setResponseExtractor(function (response, operation) {
          return response.data;
        });

        RestangularConfigurer.setRestangularFields({
          selfLink: 'self.link'
        });

        RestangularConfigurer.addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
          if ($auth.getToken()) {
            headers.Authorization = 'Bearer ' + $auth.getToken()
          }
          return {
            element: element,
            headers: headers,
            params: params,
            httpConfig: httpConfig
          };
        });
      }
    );
  }
}

export default ApiService;