import {
  Issue,
  IssueFromApi,
  RepoFromApi,
  RepositoryType,
} from '~/utils/types';

export interface IGithubMapper {
  // replace any with the correct type
  mapRepository: (repository: RepoFromApi[]) => RepositoryType[];
  mapIssue: (issue: IssueFromApi[]) => Issue[];
}
