import { IssueFromApi, RepoFromApi } from '~/core/utils/types';

export interface IGithubApi {
  getRepos: (userName: string) => Promise<RepoFromApi[]>;
  getIssues?: (repoFullName: string) => Promise<IssueFromApi[]>;
}
