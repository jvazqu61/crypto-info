import { SearchIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavBar() {
  
  const router  = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data.coinName);
    router.push(`/${data.coinName}`);
  }

  return (
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <Link href='/'>
    <a href="#" className="flex">
        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Crypto Info</span>
    </a>
  </Link>
  <div className="flex md:order-2">
      <div className=" relative mr-3 md:mr-0 md:block">
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">            
            <SearchIcon className='w-5 h-5 text-white ' />
          </div>
          <input {...register('coinName', { required: true })}  className="block p-2 pl-10 w-[150px] md:w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
        </form> 
      </div>
  </div>
  </div>
</nav>
   );
}
