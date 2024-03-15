import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGithubStore } from '~/core/stores';
import { RepositoryType } from '~/core/utils/types';

export function useDashboardController() {
  const navigate = useNavigate();
  const { repos, getRepos } = useGithubStore();
  const [repoName, setRepoName] = useState('');
  const [inputError, setInpuError] = useState('');

  const handleAddRepository = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!repoName) {
      setInpuError('Por favor, digite o nome do repositório');
      return;
    }
    try {
      await getRepos(repoName);

      setRepoName('');
      setInpuError('');
    } catch (error) {
      setInpuError('Erro na busca de repositórios');
    }
  };

  const handleNavigate = (repository: RepositoryType) => {
    navigate(`/repositories/${repository.name}`, { state: repository });
  };

  return {
    repos,
    repoName,
    inputError,
    setRepoName,
    handleAddRepository,
    handleNavigate,
  };
}
