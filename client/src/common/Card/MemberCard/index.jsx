import React from 'react';

export default function MemberCard({ member }) {
  const { id, name, photoURL, yearGraduated } = member;

  return (
    <div className='card w-64 bg-base-100 shadow-xl'>
      <figure className='px-10 pt-6'>
        <img
          src={photoURL}
          alt='Shoes'
          className='rounded-full h-40 w-40 object-cover'
        />
      </figure>
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
