import { FC, FormEvent, useState } from 'react';
import { GithubLogo } from '~/assets';
import { FiChevronRight, useNavigate } from '~/modules';
import { useGithubStore } from '~/stores';
import { RepositoryType } from '~/utils/types';
import { Error, Form, Repositories, Title } from './styles';

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

  console.log({ repos });

  return (
    <>
      <img src={GithubLogo} alt="github Explorer" />
      <Title>Explore repositórios do github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={repoName}
          placeholder="Buscar repositório"
          onChange={e => setRepoName(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repos.map(repository => (
          <a
            key={repository.full_name}
            onClick={() => handleNavigate(repository)}>
            <img src={repository.owner.avatar_url} alt={repository.full_name} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
