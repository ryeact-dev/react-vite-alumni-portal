import { onLoginUser } from '@/api/account.api';
import { INITIAL_LOGIN_DATA } from '@/globals/initialValues';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useState } from 'react';

export default function Login() {
  const onLoginMutation = useMutation({
    mutationFn: onLoginUser,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const formikLogin = useFormik({
    initialValues: INITIAL_LOGIN_DATA,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  // RENDER HTML SECTION
  return (
    <section className='mx-3 flex min-h-screen flex-col items-center justify-center sm:mx-auto sm:max-w-full'>
      <article className='card w-96 bg-base-100 shadow-xl rounded-lg'>
        <div className='card-body gap-8 text-center items-center'>
          <h2 className='card-title'>Welcome Back</h2>
          <div className='flex flex-col gap-4 w-full'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Your email here...'
                className='input input-bordered w-full max-w-xs rounded-md'
              />
            </div>
            <div className='relative'>
              <input
                type='password'
                placeholder='Your password here...'
                className='input input-bordered w-full max-w-xs rounded-md'
              />
            </div>
          </div>
          <div className='w-full'>
            <button className='btn btn-primary w-full rounded-md text-base'>
              Login
            </button>
            <div className='divider'>or</div>
            <button className='btn btn-secondary w-full rounded-md text-base'>
              Login Google
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}