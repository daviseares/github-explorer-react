import type { FC, PropsWithChildren } from 'react';
import { truncate } from 'lodash';

interface Props {
  children: string;
}
export const ActionDescription: FC<Props> = ({ children }) => (
  <p className="text-slate-400 mt-2">{truncate(children, { length: 60 })}</p>
);

export const ActionTitle: FC<Props> = ({ children }) => (
  <strong className="text-slate-100">{children}</strong>
);

export const ActionContent: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex overflow-auto mx-4 flex-col">{children}</div>
);
