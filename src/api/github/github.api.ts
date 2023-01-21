import request from '../request';

export default class GithubApi {
  static async getRepos() {
    const response = await request.get('/users/leandrotk/repos');
    return response.data;
  }
}
