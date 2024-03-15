import { FC, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { GithubLogo } from '~/assets';
import { useGithubStore } from '~/stores';
import { RepositoryType } from '~/utils/types';
import * as styles from './styles';

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
      <header className="flex items-center justify-between">
        <img src={GithubLogo} alt="Github Explorer" />
        <Link to="/" className={styles.goback()}>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </header>

      {repository && (
        <section className="mt-20">
          <header className="flex items-center">
            <img
              className="w-28 h-28 rounded-full"
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div className="ml-6">
              <strong className="text-2xl text-slate-200">
                {repository.full_name}
              </strong>
              <p className="text-slate-400 text-xl mt-1">
                {repository.description}
              </p>
            </div>
          </header>
          <ul className="flex list-none mt-10">
            <li>
              <strong className={styles.strong()}>
                {repository.stars_count}
              </strong>
              <span className={styles.span()}>Stars</span>
            </li>
            <li className="mx-20">
              <strong className={styles.strong()}>
                {repository.forks_count}
              </strong>
              <span className={styles.span()}>Forks</span>
            </li>
            <li>
              <strong className={styles.strong()}>
                {repository.open_issues_count}
              </strong>
              <span className={styles.span()}>Issues abertas</span>
            </li>
          </ul>
        </section>
      )}
      <div className="mt-20">
        {issues.map(issue => (
          <a
            className={styles.link()}
            href={issue.url}
            key={issue.id}
            target="_blank"
            rel="noopener noreferrer">
            <div>
              <strong className="text-slate-200 text-lg">{issue.title}</strong>
              <p className="text-slate-400 text-lg">{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} className="text-slate-100" />
          </a>
        ))}
      </div>
    </>
  );
};

export default Repository;
