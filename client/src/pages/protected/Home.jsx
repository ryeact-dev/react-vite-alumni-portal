import AllPosts from '@/features/home/AllPosts';
import HeroSection from '@/features/home/Hero';

export default function HomePage() {
  return (
    <article>
      <HeroSection />
      <div className='my-6 flex justify-between items-center'>
        <h2 className='text-2xl'>Recent Blog Posts</h2>
        <button className='btn btn-primary font-bold'>See all posts</button>
      </div>
      <AllPosts />
    </article>
  );
}
