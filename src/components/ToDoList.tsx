/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

function ToDoList({ text, catecogy, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      // console.log(targetIndex);
      const newToDo = { text, id, catecogy: name as any };
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };

  return (
    <li className={catecogy}>
      <span>{text}</span>
      {catecogy !== 'Todo' ? (
        <button name='Todo' onClick={onClick}>
          ToDo
        </button>
      ) : null}
      {catecogy !== 'Doing' ? (
        <button name='Doing' onClick={onClick}>
          Doing
        </button>
      ) : null}
      {catecogy !== 'Done' ? (
        <button name='Done' onClick={onClick}>
          Done
        </button>
      ) : null}
    </li>
  );
}

export default ToDoList;
