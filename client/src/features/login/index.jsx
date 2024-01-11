import { onLoginUser } from '@/api/account.api';
import { INITIAL_LOGIN_DATA } from '@/globals/initialValues';
import { loginSchema } from '@/schemas/account.schema';

import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const onLoginMutation = useMutation({
    mutationFn: onLoginUser,
    onSuccess: (data) => {
      console.log(data);
      navigate('/');
    },
  });

  const formikLogin = useFormik({
    initialValues: INITIAL_LOGIN_DATA,
    validationSchema: loginSchema,
    onSubmit: (user) => {
      onLoginMutation.mutate(user);
    },
  });

  const { handleSubmit, getFieldProps, errors, touched } = formikLogin;

  const handleGoogleLogin = async () => {};

  // RENDER HTML SECTION
  return (
    <section className='mx-3 flex min-h-screen flex-col items-center justify-center sm:mx-auto sm:max-w-full'>
      <article className='card w-96 bg-base-100 shadow-xl rounded-lg'>
        <form
          onSubmit={handleSubmit}
          className='card-body gap-8 text-center items-center'
        >
          <h2 className='card-title'>Welcome Back</h2>
          <div className='flex flex-col gap-4 w-full'>
            <div className='relative'>
              <input
                {...getFieldProps('email')}
                placeholder='Your email here...'
                className='input input-bordered w-full max-w-xs rounded-md'
              />
            </div>
            <div className='relative'>
              <input
                {...getFieldProps('password')}
                type='password'
                placeholder='Your password here...'
                className='input input-bordered w-full max-w-xs rounded-md'
              />
            </div>
          </div>
          <div className='w-full'>
            <button
              type='submt'
              className='btn btn-primary w-full rounded-md text-base'
            >
              Login
            </button>
            <div className='divider'>or</div>
            <button
              type='button'
              onClick={handleGoogleLogin}
              className='btn btn-secondary w-full rounded-md text-base'
            >
              Login Google
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}
