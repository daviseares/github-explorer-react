import { ResponseError } from '~/utils';
import { RepoFromApi } from '~/utils/types';
// import { IssueApiParams } from '~/utils/types';
import request from '../request';
import { IGithubApi } from './github.api.interface';

export default class GithubApi implements IGithubApi {
  getRepos = async (repoName: string): Promise<RepoFromApi[]> => {
    try {
      const response = await request.get(`/search/repositories?q=${repoName}`);
      return response.data.items;
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  getIssues = async (repoFullName: string) => {
    try {
      const response = await request.get(`/repos/${repoFullName}/issues`);
      return response.data;
    } catch (error) {
      throw new ResponseError(error);
    }
  };
}
