class ApiService {
  /*@ngInject*/
  constructor(Restangular, $auth) {
    this.name = 'api';
    return Restangular.withConfig(
      function (RestangularConfigurer) {
        //RestangularConfigurer.setRequestSuffix('/')

        // Env is init during webpack config
        RestangularConfigurer.setBaseUrl(Env.api.url);

        // Extract response.data
        RestangularConfigurer.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
          return data.data;
        });

        // expects API to return self.link
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
