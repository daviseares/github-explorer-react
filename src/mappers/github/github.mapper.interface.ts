export type RepositoryType = {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
};

export type Issue = {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
};

export interface IGithubMapper {
  // replace any with the correct type
  mapRepository: (repository: any) => any;
  mapIssue: (issue: any) => any;
}
