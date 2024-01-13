import PostCard from '@/common/Card/PostCard';
import { ALL_POSTS } from '@/data/dummyData';

export default function AllPostsPage() {
  return (
    <article className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-8'>
      {ALL_POSTS.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </article>
  );
}
