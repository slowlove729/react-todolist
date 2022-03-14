/* eslint-disable */

import { atom, selector } from 'recoil';

export type categories = 'Done' | 'Doing' | 'Todo';

export enum Categories {
  'Todo' = 'Todo',
  'Doing' = 'Doing',
  'Done' = 'Done',
}

export interface IToDo {
  text: string;
  id: number;
  catecogy: Categories;
}

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.Todo,
});

export const toDoState = atom<IToDo[]>({
  key: 'todo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.catecogy === category);
  },
});
