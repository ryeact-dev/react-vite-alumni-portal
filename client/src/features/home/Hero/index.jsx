import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <>
      <section className='w-full grid grid-cols-3 gap-6'>
        <article className='col-span-2 bg-base-200 rounded-xl border-2 border-base-100 p-16 flex flex-col'>
          <div>
            <h1 className='pb-1 text-3xl font-bold leading-8 text-primary lg:text-5xl xl:text-6xl'>
              Join the community, and change the future
            </h1>
            <h2 className='text-xl font-normal leading-6 my-4 md:text-left md:text-base lg:text-lg xl:text-2xl '>
              Stay Connected with your{' '}
              <span className='font-bold text-primary'>Alma Mater</span>
            </h2>
          </div>
          <div>
            <button className={`btn btn-primary rounded-full px-8 mt-20`}>
              <Link
                to='/members'
                className='flex items-center justify-center text-lg font-extrabold'
              >
                Join Now
              </Link>
            </button>
          </div>
        </article>
        <article className='bg-base-200 rounded-xl border-2 border-base-100 p-16'></article>
      </section>
      <section className='w-full grid grid-cols-3 gap-6 mt-6'>
        <article className='bg-base-200 rounded-xl border-2 border-base-100 p-16 flex flex-col'></article>
        <article className='bg-base-200 rounded-xl border-2 border-base-100 p-16 flex flex-col'></article>
        <article className='bg-base-200 rounded-xl border-2 border-base-100 p-16 flex flex-col'></article>
      </section>
    </>
  );
}
