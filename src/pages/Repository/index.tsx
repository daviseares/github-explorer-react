import { FC, useEffect } from 'react';
import { GithubLogo } from '~/assets';
import { FiChevronLeft, FiChevronRight, Link, useLocation } from '~/modules';
import { useGithubStore } from '~/stores';
import { RepositoryType } from '~/utils/types';

import { Header, Issues, RepositoryInfo } from './styles';

const Repository: FC = () => {
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

  return (
    <>
      <Header>
        <img src={GithubLogo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stars_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues.map(issue => (
          <a
            href={issue.url}
            key={issue.id}
            target="_blank"
            rel="noopener noreferrer">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
