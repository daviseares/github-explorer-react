import { type FC, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const title = tv({
  base: 'text-slate-100 max-w-450px mt-16',
  variants: {
    variant: {
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-base',
    },
  },
});

const H1: FC<PropsWithChildren> = ({ children }) => (
  <h1 className={title({ variant: 'h1' })}>{children}</h1>
);

const H2: FC<PropsWithChildren> = ({ children }) => (
  <h2 className={title({ variant: 'h2' })}>{children}</h2>
);

const H3: FC<PropsWithChildren> = ({ children }) => (
  <h3 className={title({ variant: 'h3' })}>{children}</h3>
);

const H4: FC<PropsWithChildren> = ({ children }) => (
  <h4 className={title({ variant: 'h4' })}>{children}</h4>
);

const H5: FC<PropsWithChildren> = ({ children }) => (
  <h5 className={title({ variant: 'h5' })}>{children}</h5>
);

const H6: FC<PropsWithChildren> = ({ children }) => (
  <h6 className={title({ variant: 'h6' })}>{children}</h6>
);

export const Title = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
