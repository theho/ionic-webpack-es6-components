class ApiUsersService {
  /*@ngInject*/
  constructor(ApiService) {
    this.name = 'api';
    return ApiService.service('users/')
  }
}

export default ApiUsersService;