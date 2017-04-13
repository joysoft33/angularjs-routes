
function authInterceptor(JWTService, AppConstants, $window, $q) {

  return {
    // automatically attach Authorization header
    request: function (config) {
      if (config.url.indexOf(AppConstants.api) === 0 && JWTService.get()) {
        config.headers.Authorization = 'Token ' + JWTService.get();
      }
      return config;
    },

    // Handle 401
    responseError: function (rejection) {
      if (rejection.status === 401) {
        // clear any JWT token being stored
        JWTService.destroy();
        // do a hard page refresh
        $window.location.reload();
      }
      return $q.reject(rejection);
    }

  }
}