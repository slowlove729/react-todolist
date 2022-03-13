/* eslint-disable react/self-closing-comp */
import React from 'react';
import { IToDo } from '../atoms';

function ToDoList({ text, catecogy }: IToDo) {
  return <li className={catecogy}>{text}</li>;
}

export default ToDoList;
