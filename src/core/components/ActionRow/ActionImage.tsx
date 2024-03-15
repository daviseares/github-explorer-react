import { type FC } from 'react';

interface Props {
  src: string;
  alt: string;
}
export const ActionImage: FC<Props> = props => {
  return <img {...props} className="w-16 h-16 rounded-full" />;
};
