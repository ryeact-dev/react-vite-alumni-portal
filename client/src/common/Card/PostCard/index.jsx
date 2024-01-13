import Image from '@/common/Image';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  const { coverPhotoURL, photoURL, title, body, date } = post;
  return (
    <Link className='w-90 bg-base-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105'>
      <Image src={coverPhotoURL} alt='' />
      <div className='flex flex-col my-6 px-4'>
        {/* <img
          className='w-10 h-10 rounded-full ml-2 object-cover object-center'
          src={photoURL}
          alt='David'
        /> */}
        <div>
          <h1 className='text-xl font-bold'>{title}</h1>
          <p className='text-sm font-normal text-gray-600 my-2'>{date}</p>
        </div>
        <p className='flex justify-between italic text-sm'>{`${body
          .toString()
          .slice(0, 100)}...`}</p>
      </div>
    </Link>
  );
}
