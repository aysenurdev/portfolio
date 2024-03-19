// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,

} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  // { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  // {
  //   name: 'testimonials',
  //   path: '/testimonials',
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  // {
  //   name: 'contact',
  //   path: '/contact',
  //   icon: <HiEnvelope />,
  // },
];

//next link
import Link from 'next/link';

//next router
import { useRouter} from 'next/router'







const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
  <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen text-accent/70' >
{/* inner */}
<div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8  backdrop-blur-sm text-3xl xl:text-xl'>
{navData.map((link, index) => (
  <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`} href={link.path} key={index}>
    {/* tooltip */}
    <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
      <div className='bg-green relative flex text-accent items-center p-[6px] rounded-[3px]'>
    
        {/* star icon */}
        <div className="ml-2 text-yellow-400">
                  {/* Creating star icon using CSS */}
                  <div className="w-4 h-4 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="pink" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2 L14.125 8.5625 L21.5625 9.625 L16.625 14.75 L18.25 21.375 L12 17.875 L5.75 21.375 L7.375 14.75 L2.4375 9.625 L9.875 8.5625 L12 2 Z" />
                    </svg>
                  </div>
                </div>
      </div>
    </div>
    {/* icon */}
    <div className="flex items-center">
   
      <div className="ml-2">{link.name}</div> {/* Display text label */}
    </div>
  </Link>
))}

</div>
</nav>
  );
};

export default Nav;
