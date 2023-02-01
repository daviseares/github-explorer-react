import {
  Issue,
  IssueFromApi,
  RepoFromApi,
  RepositoryType,
} from '~/utils/types';
import { IGithubMapper } from './github.mapper.interface';

export default class GithubMapper implements IGithubMapper {
  mapRepository(repository: RepoFromApi[]): RepositoryType[] {
    return repository.map(repo => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      url: repo.html_url,
      stars_count: repo.stargazers_count,
      open_issues_count: repo.open_issues_count,
      forks_count: repo.forks_count,
      owner: {
        login: repo.owner.login,
        avatar_url: repo.owner.avatar_url,
      },
    }));
  }

  mapIssue(issue: IssueFromApi[]): Issue[] {
    return issue.map(issue => ({
      id: issue.id,
      title: issue.title,
      url: issue.html_url,
      user: {
        login: issue.user.login,
      },
    }));
  }
}
