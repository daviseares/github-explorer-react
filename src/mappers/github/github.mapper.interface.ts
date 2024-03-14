import {
  Issue,
  IssueFromApi,
  RepoFromApi,
  RepositoryType,
} from '~/utils/types';

export interface IGithubMapper {
  mapRepository: (repository: RepoFromApi[]) => RepositoryType[];
  mapIssue: (issue: IssueFromApi[]) => Issue[];
}
