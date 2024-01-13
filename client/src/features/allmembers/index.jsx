import MemberCard from '@/common/Card/MemberCard';
import { MEMBER } from '@/data/dummyData';

function AllMembers() {
  return (
    <article className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-8'>
      {MEMBER.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </article>
  );
}

export default AllMembers;
