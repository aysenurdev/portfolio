import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-6 text-2xl mt-8 text-accent my-30 mb-8">
      <Link href={'https://github.com/'} className="hover:text-blue-500 transition-all duration-200 transform hover:translate-y-1">
        <FaGithub />
      </Link>
      <Link href={'https://www.linkedin.com/in/aysenur-demir-3700ab1b1/'} className=" hover:text-blue-500 transition-all duration-300  transform hover:translate-y-1">
        <FaLinkedin />
      </Link>
      <Link href={'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'} className="hover:text-blue-500 transition-all duration-300  transform hover:translate-y-1">
        <FaEnvelope />
      </Link>
    </div>
  );
};

export default Socials;
