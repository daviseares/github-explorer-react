import { Issue, RepositoryType } from '~/core/utils/types';

type InitialState = {
  repos: RepositoryType[];
  issues: Issue[];
};

export const initialState: InitialState = {
  repos: [],
  issues: [],
};

export interface IGithubStore extends InitialState {
  getRepos: (repoName: string) => Promise<void>;
  getIssues: (repoName: string) => Promise<void>;
  clearRepos: () => void;
  clearIssues: () => void;
}
