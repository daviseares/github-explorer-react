import { FC } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { tv } from 'tailwind-variants';
import { ActionRow } from '~/core/components/ActionRow';
import { Header } from '~/core/components/Header';
import { useRepositoryController } from './hooks/useRepositoryController';

const strong = tv({
  base: 'block text-4xl text-slate-200',
});

const span = tv({
  base: 'block text-xl text-slate-300 mt-2',
});

const Repository: FC = () => {
  const { issues, repository } = useRepositoryController();

  return (
    <>
      <Header showBackButton />

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
              <strong className={strong()}>{repository.stars_count}</strong>
              <span className={span()}>Stars</span>
            </li>
            <li className="mx-20">
              <strong className={strong()}>{repository.forks_count}</strong>
              <span className={span()}>Forks</span>
            </li>
            <li>
              <strong className={strong()}>
                {repository.open_issues_count}
              </strong>
              <span className={span()}>Issues abertas</span>
            </li>
          </ul>
        </section>
      )}
      <div className="mt-20">
        {issues.map(issue => (
          <ActionRow.Card
            href={issue.url}
            key={issue.id}
            target="_blank"
            rel="noopener noreferrer">
            <div>
              <ActionRow.Title>{issue.title}</ActionRow.Title>
              <ActionRow.Description>{issue.user.login}</ActionRow.Description>
            </div>
            <FiChevronRight size={20} className="text-slate-100" />
          </ActionRow.Card>
        ))}
      </div>
    </>
  );
};

export default Repository;
