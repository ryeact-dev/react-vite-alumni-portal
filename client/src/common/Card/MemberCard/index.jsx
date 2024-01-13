import Image from '@/common/Image';
import React from 'react';

export default function MemberCard({ member }) {
  const { id, name, photoURL, yearGraduated } = member;

  return (
    <div className='card w-64 bg-base-100 shadow-xl'>
      <div className='mx-auto pt-6'>
        <figure className='h-40 w-40 rounded-full border-4 border-base-200'>
          <Image
            src={photoURL}
            alt='Shoes'
            className=' w-full h-full object-cover'
          />
        </figure>
      </div>
      <div className='card-body items-center text-center'>
        <h2 className='card-title -mb-2'>{name}</h2>
        <p>Graduated: {yearGraduated}</p>
        <div className='card-actions'>
          <button className='btn btn-accent rounded-full btn-sm text-white px-6 mt-6'>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
