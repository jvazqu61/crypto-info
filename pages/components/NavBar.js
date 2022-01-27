// import {Search} from "@heroicons/react/solid";
import { SearchIcon } from '@heroicons/react/solid'

export default function NavBar() {
  return (
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <a href="#" className="flex">
    {/* <svg className="mr-3 h-10" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA"/><path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE"/><path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2"/></svg> */}
      <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Crypto Info</span>
  </a>
  <div className="flex md:order-2">
      <div className=" relative mr-3 md:mr-0 md:block">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">            <SearchIcon className='w-5 h-5 text-white ' />
        </div>
        <input type="text" className="block p-2 pl-10 w-[150px] md:w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
      </div>
      
  </div>
  </div>
</nav>
   );
}
