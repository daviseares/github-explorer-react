import { FC, FormEvent, useState } from 'react';
import { truncate } from 'lodash';
import { FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { GithubLogo } from '~/assets';
import { useGithubStore } from '~/stores';
import { RepositoryType } from '~/utils/types';

import * as styles from './styles';

const Dashboard: FC = () => {
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

  return (
    <>
      <img src={GithubLogo} alt="github Explorer" />

      <h1 className={styles.title()}>Explore repositórios do github</h1>

      <form className="max-w-3xl mt-10 flex" onSubmit={handleAddRepository}>
        <input
          className={styles.input({ error: !!inputError })}
          value={repoName}
          placeholder="Buscar repositório"
          onChange={e => setRepoName(e.target.value)}
        />
        <button className={styles.button()} type="submit">
          Pesquisar
        </button>
      </form>

      {inputError && (
        <span className="text-red-400 block mt-2">{inputError}</span>
      )}

      <div className="max-w-3xl mt-36">
        {repos.map(repository => (
          <a
            className={styles.link()}
            key={repository.full_name}
            onClick={() => handleNavigate(repository)}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.full_name}
              className="w-16 h-16 rounded-full"
            />
            <div className="flex overflow-auto mx-4 flex-col">
              <strong className="text-slate-100">{repository.full_name}</strong>
              <p className="text-slate-400 mt-2">
                {truncate(repository.description, { length: 60 })}
              </p>
            </div>

            <FiChevronRight size={20} className="ml-auto text-slate-100" />
          </a>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
