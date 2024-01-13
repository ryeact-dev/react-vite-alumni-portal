import AllPosts from '@/features/home/AllPosts';
import HeroSection from '@/features/home/Hero';
import Members from '@/features/home/Members';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <article>
      <HeroSection />
      <div className='my-6 flex justify-between items-center'>
        <h2 className='text-2xl'>Recent Posts</h2>
        <button className='btn btn-primary font-bold'>See all posts</button>
      </div>
      <AllPosts />
      <div className='my-6 flex justify-between items-center'>
        <h2 className='text-2xl'>Recent New Members</h2>
        <button className='btn btn-primary font-bold'>See all members</button>
      </div>
      <Members />
      <article className='my-12 bg-base-200 rounded-xl border-2 border-base-100 p-16 flex flex-col items-center'>
        <div className='max-w-xl text-center'>
          <h1 className='pb-1 text-3xl font-bold leading-8 text-primary lg:text-5xl xl:text-6xl'>
            Join the community, and change the future
          </h1>
          <h2 className='text-xl font-normal leading-6 my-4 md:text-base lg:text-lg xl:text-2xl '>
            Stay Connected with your{' '}
            <span className='font-bold text-primary'>Alma Mater</span>
          </h2>
        </div>
        <div className='w-full flex items-center justify-center'>
          <Link
            to='/members'
            className='btn btn-primary rounded-full px-8 mt-20 w-full max-w-lg text-xl'
          >
            Join Now
          </Link>
        </div>
      </article>
    </article>
  );
}
