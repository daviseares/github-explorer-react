import {
  Issue,
  IssueFromApi,
  RepoFromApi,
  RepositoryType,
} from '~/core/utils/types';

export interface IGithubMapper {
  mapRepository: (repository: RepoFromApi[]) => RepositoryType[];
  mapIssue: (issue: IssueFromApi[]) => Issue[];
}
