import { tv } from 'tailwind-variants';

export const title = tv({
  base: 'text-4xl text-slate-100 max-w-450px line-height-56px mt-16',
});

export const input = tv({
  base: 'w-full h-16 px-6 bg-zinc-700 rounded-l-md border-2 border-zinc-700 text-slate-100 placeholder-slate-400 text-lg',
  variants: {
    error: {
      true: 'border-red-400',
    },
  },
});

export const button = tv({
  base: 'w-60 rounded-r-md bg-violet-500 text-slate-100 text-xl hover:bg-violet-600',
});

export const link = tv({
  base: 'flex items-center justify-between bg-zinc-700 rounded-md p-6 mt-4 transition duration-300 hover:bg-zinc-800 hover:translate-x-2',
});
