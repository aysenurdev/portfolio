import { Sora } from '@next/font/google';
import Head from 'next/head';

// Font settings
const sora = Sora({
  subsets: ['latin', 'latin-ext'], 
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

// Components
import Nav from '../components/Nav';
import Header from '../components/Header';


const Layout = ({ children }) => {
  return (
    <div className={'page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative'}>
      <Nav />
      <Header />
 
      {children}
      <Head>
        <link rel="icon" href="/ayy.png" />
   
      </Head>
    </div>
  );
};

export default Layout;
