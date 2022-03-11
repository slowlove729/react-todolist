import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  email: string;
  id: string;
  password: string;
  password_confirm: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password_confirm) {
      setError('password_confirm', { message: 'Password is incorrect' }, { shouldFocus: true });
    }
    // setError('extraError', { message: 'Server offline' });
  };
  console.log(errors);
  // console.log(watch());
  return (
    <div style={{ padding: '30px' }}>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onValid)}>
        <input
          {...register('email', {
            required: 'Email required',
            pattern: {
              value: /^[a-zA-Z0-9._%+_]+@naver.com$/,
              message: 'Only naver.com emails allow',
            },
          })}
          placeholder='Email'
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('id', {
            required: 'ID is required',
            minLength: {
              value: 5,
              message: 'ID is too short',
            },
          })}
          placeholder='Id'
        />
        <span>{errors?.id?.message}</span>
        <input
          {...register('password', {
            required: 'password is required',
            minLength: {
              value: 5,
              message: 'password is too short',
            },
          })}
          placeholder='Password'
          type='password'
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register('password_confirm', {
            required: 'password is required',
            minLength: {
              value: 5,
              message: 'password is too short',
            },
          })}
          placeholder='Password Confirm'
          type='password'
        />
        <span>{errors?.password_confirm?.message}</span>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
