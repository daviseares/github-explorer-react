import { type FC } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { GithubLogo } from '~/core/assets';

interface Props {
  showBackButton?: boolean;
}

export const Header: FC<Props> = ({ showBackButton = false }) => {
  return (
    <header className="flex items-center justify-between">
      <img src={GithubLogo} alt="Github Explorer" />
      {showBackButton && (
        <Link
          to="/"
          className="flex items-center text-slate-100 text-lg hover:text-slate-400">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      )}
    </header>
  );
};
