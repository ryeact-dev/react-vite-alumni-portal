import React from 'react';

export default function Header() {
  return (
    <header className='bg-base-100 sticky top-0'>
      <div className='flex justify-between items-center max-w-6xl mx-auto py-3'>
        <div>Logo</div>
        <div>Avatar&Menus</div>
      </div>
    </header>
  );
}
