import { githubApi } from '~/api';
import { githubMapper } from '~/mappers';
import { combine, create, persist } from '~/modules';
import { IGithubStore, initialState } from './github.store.config';

const githubStore = combine({ ...initialState }, set => ({
  getRepos: async (repoName: string) => {
    const repos = await githubApi.getRepos(repoName);

    set({ repos: githubMapper.mapRepository(repos) });
  },

  getIssues: async (repoFullName: string) => {
    const issues = await githubApi.getIssues(repoFullName);

    set({ issues: githubMapper.mapIssue(issues) });
  },

  clearRepos: () => set({ repos: [] }),

  clearIssues: () => set({ issues: [] }),
}));

export const useGithubStore = create<IGithubStore>()(
  persist(githubStore, {
    name: 'github',
  }),
);
