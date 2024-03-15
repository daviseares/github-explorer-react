import { FC } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { ActionRow } from '~/core/components/ActionRow';
import { Header } from '~/core/components/Header';
import { Title } from '~/core/components/Title';
import { SearchForm } from './components/SearchForm';
import { useDashboardController } from './hooks/useDashboardController';

const Dashboard: FC = () => {
  const controller = useDashboardController();
  return (
    <>
      <Header />

      <Title.H1>Explore repositórios do github</Title.H1>

      <SearchForm.Form onSubmit={controller.handleAddRepository}>
        <SearchForm.Input
          inputError={controller.inputError}
          repoName={controller.repoName}
          onChange={e => controller.setRepoName(e.target.value)}
        />
        <SearchForm.Button>Pesquisar</SearchForm.Button>
      </SearchForm.Form>

      {controller.inputError && (
        <span className="text-red-400 block mt-2">{controller.inputError}</span>
      )}

      <div className="max-w-3xl mt-36">
        {controller.repos.map(repository => (
          <ActionRow.Card
            key={repository.full_name}
            onClick={() => controller.handleNavigate(repository)}>
            <ActionRow.Image
              src={repository.owner.avatar_url}
              alt={repository.full_name}
            />
            <ActionRow.Content>
              <ActionRow.Title>{repository.full_name}</ActionRow.Title>
              <ActionRow.Description>
                {repository.description}
              </ActionRow.Description>
            </ActionRow.Content>

            <FiChevronRight size={20} className="ml-auto text-slate-100" />
          </ActionRow.Card>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
