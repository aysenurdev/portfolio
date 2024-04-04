import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute mt-6 z-30 w-full flex items-center px-16 xl:px-0 xl:h-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-50 py-2 relative">
          {/* Logo */}
          <Link href={'/'}>
            <Image src={'/aysenur-portfolio-logo.png'} width={170} height={90} alt="" priority={true} />
          </Link>
          {/* Socials */}
          <div className="lg:absolute bottom-0 right-0">
              <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
