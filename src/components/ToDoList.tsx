/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Categories, IToDo, toDoState } from '../atoms';

const ToDoText = styled.span`
  color: ${(props) => props.theme.accentColor};
  background-color: ${(props) => props.theme.cardBgColor};
  display: inline-block;
  width: 200px;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.textColor};
  text-align: right;
  display: inline-block;
`;

const List = styled.li`
  padding: 3px;
`;

function ToDoList({ text, catecogy, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
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
    <List>
      <ToDoText>{text}</ToDoText>
      {catecogy !== Categories.Todo ? (
        <Button name={Categories.Todo} onClick={onClick}>
          ToDo
        </Button>
      ) : null}
      {catecogy !== Categories.Doing ? (
        <Button name={Categories.Doing} onClick={onClick}>
          Doing
        </Button>
      ) : null}
      {catecogy !== Categories.Done ? (
        <Button name={Categories.Done} onClick={onClick}>
          Done
        </Button>
      ) : null}
    </List>
  );
}

export default ToDoList;
