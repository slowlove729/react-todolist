/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { toDoState } from '../atoms';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function ToDo() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>ToDos</h1>
      <hr />
      <ToDoForm />
      <ul>
        {toDos.map((todo) => (
          <ToDoList {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
