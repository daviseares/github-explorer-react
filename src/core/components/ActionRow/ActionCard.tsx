import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export const ActionCard: FC<Props> = ({ children, onClick, ...props }) => {
  return (
    <a
      {...props}
      className="flex items-center justify-between bg-zinc-700 p-6 rounded-lg mb-4 transition duration-300 hover:bg-zinc-800 hover:translate-x-2 overflow-y-hidden"
      onClick={onClick}>
      {children}
    </a>
  );
};
