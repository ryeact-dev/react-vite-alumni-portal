import Image from '@/common/Image';
import { useLocation } from 'react-router-dom';

export default function SinglePost() {
  const { state } = useLocation();

  const { title, date, coverPhotoURL, body } = state;

  return (
    <article className='w-full bg-base-200 rounded-lg border-2 border-base-100 px-4 py-8 flex flex-col gap-6'>
      <div>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p>{date}</p>
      </div>
      <div className='w-full'>
        <Image
          src={coverPhotoURL}
          className='h-[36rem] w-full object-cover object-center'
        />
      </div>
      <div>
        <p className='text-base'>{body}</p>
      </div>
    </article>
  );
}
