import Image from '@/common/Image';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <>
      <section className='w-full flex flex-col-reverse sm:grid sm:grid-cols-3 gap-6'>
        <article className='sm:col-span-2 bg-base-200 rounded-xl border-2 border-base-100 p-4 sm:p-16 flex flex-col'>
          <div>
            <h1 className='pb-1 text-3xl font-bold leading-8 text-primary lg:text-5xl xl:text-6xl'>
              Join the community, and change the future
            </h1>
            <h2 className='text-xl font-normal leading-6 my-4 md:text-left md:text-base lg:text-lg xl:text-2xl '>
              Stay Connected with your{' '}
              <span className='font-bold text-accent'>Alma Mater</span>
            </h2>
          </div>
          <div className='sm:max-w-xs'>
            <Link
              to='/members'
              className='btn btn-accent rounded-full w-full mt-20 text-lg font-extrabold text-white'
            >
              Join Now
            </Link>
          </div>
        </article>
        <article className='h-full bg-base-200'>
          <Image
            className='rounded-xl border-2 border-base-100'
            src='https://plus.unsplash.com/premium_photo-1683143646674-423f61c16a1e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </article>
      </section>
      <section className='w-full sm:grid sm:grid-cols-3 gap-6 mt-6'>
        <article className='bg-base-200 rounded-xl border-2 border-base-100 flex flex-col relative'>
          <div className='group relative overflow-hidden bg-base-200 px-6 pt-10 pb-8 shadow-xl transition-all duration-300  hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10'>
            <span className='absolute top-[-50px] left-[-100px] z-0 h-20 w-20 rounded-full bg-accent transition-all duration-300 group-hover:scale-[12]'></span>
            <div className='relative z-10 mx-auto max-w-md'>
              <div className='space-y-6  text-base leading-7 text-slate-500 transition-all duration-300 group-hover:text-white/90'>
                <p>
                  Perfect for learning how the framework works, prototyping a
                </p>
              </div>
              <div className='pt-5 text-base font-semibold leading-7'>
                <Link
                  to='/'
                  className='text-accent transition-all duration-300 group-hover:text-white'
                >
                  Read the docs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </article>
        <article className='bg-base-200 rounded-xl border-2 border-base-100 flex flex-col relative my-6 sm:my-0'>
          <div className='group relative overflow-hidden bg-base-200 px-6 pt-10 pb-8 shadow-xl transition-all duration-300  hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10'>
            <span className='absolute top-[-50px] left-[-100px] z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[12]'></span>
            <div className='relative z-10 mx-auto max-w-md'>
              <div className='space-y-6  text-base leading-7 text-slate-500 transition-all duration-300 group-hover:text-white/90'>
                <p>
                  Perfect for learning how the framework works, prototyping a
                </p>
              </div>
              <div className='pt-5 text-base font-semibold leading-7'>
                <Link
                  to='/'
                  className='text-primary transition-all duration-300 group-hover:text-white'
                >
                  Read the docs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </article>
        <article className='bg-base-200 rounded-xl border-2 border-base-100 flex flex-col relative'>
          <div className='group relative overflow-hidden bg-base-200 px-6 pt-10 pb-8 shadow-xl transition-all duration-300  hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10'>
            <span className='absolute top-[-50px] left-[-100px] z-0 h-20 w-20 rounded-full bg-secondary transition-all duration-300 group-hover:scale-[12]'></span>
            <div className='relative z-10 mx-auto max-w-md'>
              <div className='space-y-6  text-base leading-7 text-slate-500 transition-all duration-300 group-hover:text-white/90'>
                <p>
                  Perfect for learning how the framework works, prototyping a
                </p>
              </div>
              <div className='pt-5 text-base font-semibold leading-7'>
                <Link
                  to='/'
                  className='text-secondary transition-all duration-300 group-hover:text-white'
                >
                  Read the docs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
