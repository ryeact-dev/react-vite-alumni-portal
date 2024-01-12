import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProfileData from './components/ProfileData';
import { ACCOUNT_PROFILE } from '@/data/dummyData';

export default function AccountProfile({ email, onHandleOpen }) {
  return (
    <article className='mx-auto max-w-6xl rounded-xl bg-base-200 border-2 border-base-100  px-2 pb-8 sm:px-0 '>
      <div className='max-h-full pt-4 text-2xl sm:flex sm:p-6 sm:text-left '>
        <figure className='flex items-center w-full rounded-lg bg-base-100 px-2 sm:my-0 sm:h-80 sm:w-80 sm:px-0'>
          <img
            src={ACCOUNT_PROFILE.photoURL}
            className='rounded-2xl object-cover shadow-2xl sm:h-80 sm:w-80'
          />
        </figure>
        <ProfileData ACCOUNT_PROFILE={ACCOUNT_PROFILE} />
        {/* <ProfileData
          user={!email ? user : isSuccess && memberData}
          email={email}
        /> */}
      </div>
      <div className='max-w-full sm:flex sm:justify-end'>
        <div className='h-30 mx-2 mt-4 flex font-semibold sm:mx-6 sm:mt-0 sm:w-60 sm:justify-end'>
          {email ? (
            <button
              onClick={onHandleOpen}
              className={` btn btn-primary rounded-full px-10 text-base text-white`}
            >
              Back to members list
            </button>
          ) : (
            <Link
              to={'/account/update-profile'}
              className={` btn btn-primary rounded-full px-10 text-base text-white`}
            >
              Update Profile
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
