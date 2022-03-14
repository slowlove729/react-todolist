import React from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoryState, toDoState } from '../atoms';

const Form = styled.form`
  margin: 10px 0px;
`;

interface IForm {
  ToDo: string;
}

function ToDoForm() {
  const toDosMod = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const onValid = (data: IForm) => {
    toDosMod((oldToDos) => [{ text: data.ToDo, id: Date.now(), catecogy: category }, ...oldToDos]);
    setValue('ToDo', '');
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('ToDo', { required: 'Please Write a Todo' })}
        type='text'
        placeholder='Write a Todo'
      />
      <span>{errors?.ToDo?.message}</span>
      <button type='submit'>Add</button>
    </Form>
  );
}

export default ToDoForm;
