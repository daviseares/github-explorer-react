import { tv } from 'tailwind-variants';

export const goback = tv({
  base: 'flex items-center text-slate-100 text-lg hover:text-slate-400',
});

export const strong = tv({
  base: 'block text-4xl text-slate-200',
});

export const span = tv({
  base: 'block text-xl text-slate-300 mt-2',
});

export const link = tv({
  base: 'flex items-center justify-between bg-zinc-700 p-6 rounded-lg mb-4 transition duration-300 hover:bg-zinc-800 hover:translate-x-2 overflow-y-hidden',
});
