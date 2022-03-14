/* eslint-disable */

import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Categories, categoryState, toDoSelector, toDoState } from '../atoms';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const ToDoContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: bolder;
`;

const Select = styled.select`
  background-color: ${(props) => props.theme.bgColor};
  border: 0;
  color: ${(props) => props.theme.textColor};
  font-size: 1.2em;
  margin: 10px 0px;
`;

const Line = styled.hr`
  border-top-width: 0px;
  border-bottom-width: 5px;
`;

const ListContainer = styled.div`
  display: inline-block;
  text-align: left;
`;

function ToDo() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(category);
  return (
    <ToDoContainer>
      <Title>ToDos</Title>
      <Line />
      <Select value={category} onInput={onInput}>
        <option value={Categories.Todo}>ToDo</option>
        <option value={Categories.Doing}>Doing</option>
        <option value={Categories.Done}>Done</option>
      </Select>
      <ToDoForm />
      <ListContainer>
        {toDos.map((todo) => (
          <ToDoList key={todo.id} {...todo} />
        ))}
      </ListContainer>
    </ToDoContainer>
  );
}

export default ToDo;
