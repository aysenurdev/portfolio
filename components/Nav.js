import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HiHome,
  HiUser,
  HiViewColumns,
} from 'react-icons/hi2';

const navData = [
  { name: 'Home', path: '/', icon: <HiHome /> },
  { name: 'About', path: '/about', icon: <HiUser /> },
  { name: 'Work', path: '/work', icon: <HiViewColumns /> },
 
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed bottom-0 mt-auto xl:right-[2%] z-50 w-full xl:w-16 xl:max-w-md xl:h-screen text-accent'>
      {/* inner */}
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 backdrop-blur-sm text-xl xl:text-xl bg-blue-100 xl:bg-transparent'>
        {navData.map((link, index) => (
          <Link 
            className={`${link.path === pathname && 'text-secondary'} relative flex items-center group hover:text-secondry  font-semibold flex-col items-center`}
            href={link.path} 
            key={index}
          >
            {/* tooltip */}
            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-green relative flex text-accent items-center p-[6px] rounded-[3px]'>
                {/* star icon */}
                <div className="ml-2 ">
              
                </div>
              </div>
            </div>
            {/* Display icon and name in different divs */}
            <div className="flex flex-col items-center justify-center xl:justify-start transition-all duration-300 hover:translate-y-1">
              {/* Render icon above name on mobile */}
              <div className="block xl:hidden">{link.icon}</div> 
              {/* Render name */}
              <div>{link.name}</div> 
          
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
