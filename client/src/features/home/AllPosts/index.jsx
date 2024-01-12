import Card from '@/common/Card';
import { ALL_POSTS } from '@/data/dummyData';

export default function AllPosts() {
  return (
    <article className='grid grid-cols-3 gap-10 my-8'>
      {ALL_POSTS.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </article>
  );
}
