import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useGithubStore } from '~/core/stores';
import { RepositoryType } from '~/core/utils/types';

export function useRepositoryController() {
  const { getIssues, issues, clearIssues } = useGithubStore();
  const location = useLocation();
  const repository = location.state as RepositoryType;

  const onGetIssues = async () => {
    try {
      await getIssues(repository.full_name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetIssues();

    return () => {
      clearIssues();
    };
  }, []);

  return {
    issues,
    repository,
  };
}
