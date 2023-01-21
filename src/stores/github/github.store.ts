import { combine, create, persist } from '~/modules';
import { IGithubStore, initialState } from './github.store.interface';

export const githubStore = combine({ ...initialState }, set => ({
  setRepositories: (repositories: any) => set({ repositories }),

  setUserName: (userName: string) => set({ userName }),

  clearUserName: () => set({ userName: '' }),

  clearRepositories: () => set({ repositories: [] }),
}));

export const useGithubStore = create<IGithubStore>()(
  persist(githubStore, {
    name: 'github',
  }),
);
