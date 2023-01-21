import { FormEvent, useEffect, useState } from 'react';
import { GithubLogo } from '~/assets';
import { RepositoryType } from '~/mappers';
import { FiChevronRight, Link } from '~/modules';
import api from '../../api/request';
import { Error, Form, Repositories, Title } from './styles';

export const Dashboard = () => {
  const [user, setUser] = useState('');
  const [inputError, setInpuError] = useState('');
  const [repositories, setRepositories] = useState<RepositoryType[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!user) {
      setInpuError('Digite um usário válido do github');
      return;
    }

    try {
      const response = await api.get<RepositoryType>(`users/${user}/repos`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setUser('');
      setInpuError('');
    } catch (error) {
      setInpuError('Erro na busca de repositórios');
    }
  }

  return (
    <>
      <img src={GithubLogo} alt="github Explorer" />
      <Title>Explore repositórios do github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={user}
          placeholder="Digite o 'autor' do repositório"
          onChange={e => setUser(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <Link
            to={`/repositories/${repository.full_name}`}
            key={repository.full_name}>
            <img src={repository.owner.avatar_url} alt={repository.full_name} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
