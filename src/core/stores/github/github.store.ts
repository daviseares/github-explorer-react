import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';
import { githubApi } from '~/core/api';
import { githubMapper } from '~/core/mappers';
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
