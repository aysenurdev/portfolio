import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://github.com/'} className="hover:text-accent transition-all duration-300">
        <FaGithub />
      </Link>
      <Link href={'https://www.linkedin.com/in/aysenur-demir-3700ab1b1/'} className="hover:text-accent transition-all duration-300">
        <FaLinkedin />
      </Link>
      <Link href={'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'} className="hover:text-accent transition-all duration-300">
        <FaEnvelope />
      </Link>
    </div>
  );
};

export default Socials;
