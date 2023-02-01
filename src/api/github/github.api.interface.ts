import { IssueFromApi, RepoFromApi } from '~/utils/types';

export interface IGithubApi {
  getRepos: (userName: string) => Promise<RepoFromApi[]>;
  getIssues?: (repoFullName: string) => Promise<IssueFromApi[]>;
}
