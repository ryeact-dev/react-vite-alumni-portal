export default function ProfileData({ user, email }) {
  //   const {
  //     user_address,
  //     user_fullname,
  //     company_name,
  //     job_designation,
  //     department_graduated,
  //     year_graduated,
  //     about_me,
  //   } = user;

  const content = (
    <div className='mx-auto mt-4 px-3 text-left text-xl sm:mt-0 sm:w-80 sm:pl-6 md:w-3/4'>
      <h1 className='border-b border-gray-300 pb-2 text-3xl font-bold text-primary'>
        John Wick III
      </h1>
      {/* {!email && ( */}
      <>
        <p className='text-g mt-2 text-base'>Home Address</p>
        <h2 className='font-semibold leading-none'>Canada, USA</h2>
      </>
      {/* )} */}

      <p className='mt-3 text-base'>Program Graduated </p>
      <h2 className='font-semibold leading-none'>Computer Science</h2>
      <p className='mt-3 text-base'>Year Graduated </p>
      <h2 className='-mt-1 font-semibold '>2001</h2>
      <p className='mt-2 text-base'>Currently working at</p>
      <h2 className='font-semibold leading-none'>NASA</h2>
      <p className='mt-3 text-base'>Job Designation</p>
      <h2 className='font-semibold leading-none'>Janitor</h2>
      <p className='mt-4 text-xl font-semibold'>About me</p>
      <p className='mt-4 text-xl font-medium italic'>
        Here is an example.. Hello there! Im Alex, a software engineer with a
        knack for problem-solving and a passion for technology...{' '}
      </p>
      {/* <p className={`text-base ${about_me ? '' : 'italic text-black/60 '}`}>
        {about_me?.trim() === ''
          ? 'Here is an example: "Hello there! Im Alex, a software engineer with a knack for problem-solving and a passion for technology... '
          : about_me}
      </p> */}
    </div>
  );
  return content;
}
