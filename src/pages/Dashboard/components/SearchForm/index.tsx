import type { FC, FormEvent, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

export const input = tv({
  base: 'w-full h-16 px-6 bg-zinc-700 rounded-l-md border-2 border-zinc-700 text-slate-100 placeholder-slate-400 text-lg',
  variants: {
    error: {
      true: 'border-red-400',
    },
  },
});

interface SearchInputProps {
  inputError: string;
  repoName: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput: FC<SearchInputProps> = ({
  onChange,
  repoName,
  inputError,
}) => (
  <input
    className={input({ error: !!inputError })}
    value={repoName}
    placeholder="Buscar repositório"
    onChange={onChange}
  />
);

const SearchButton: FC<PropsWithChildren> = ({ children }) => (
  <button
    className="w-60 rounded-r-md bg-violet-500 text-slate-100 text-xl hover:bg-violet-600"
    type="submit">
    {children}
  </button>
);

interface FormProps extends PropsWithChildren {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
const Form: FC<FormProps> = ({ onSubmit, children }) => (
  <form className="max-w-3xl mt-10 flex" onSubmit={onSubmit}>
    {children}
  </form>
);

export const SearchForm = {
  Button: SearchButton,
  Input: SearchInput,
  Form: Form,
};
