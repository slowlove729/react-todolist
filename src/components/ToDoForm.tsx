import React from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';

interface IForm {
  ToDo: string;
}

function ToDoForm() {
  const toDosMod = useSetRecoilState(toDoState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const onValid = (data: IForm) => {
    toDosMod((oldToDos) => [{ text: data.ToDo, id: Date.now(), catecogy: 'Todo' }, ...oldToDos]);
    setValue('ToDo', '');
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('ToDo', { required: 'Please Write a Todo' })}
        type='text'
        placeholder='Write a Todo'
      />
      <span>{errors?.ToDo?.message}</span>
      <button type='submit'>Add</button>
    </form>
  );
}

export default ToDoForm;
