export const initialState = {
  repositories: [],
  userName: '',
};

export interface IGithubStore {
  repositories: any;
  userName: string;
  setRepositories: (repositories: any) => void;
  setUserName: (userName: string) => void;
  clearUserName: () => void;
  clearRepositories: () => void;
}
