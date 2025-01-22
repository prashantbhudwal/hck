import { atom } from 'jotai';

export const searchTermAtom = atom('');
export const selectedCategoriesAtom = atom<string[]>([]);
