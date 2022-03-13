import { atom } from 'recoil';

export interface IToDo {
  text: string;
  id: number;
  catecogy: 'Done' | 'Doing' | 'Todo';
}

export const toDoState = atom<IToDo[]>({
  key: 'todo',
  default: [],
});
