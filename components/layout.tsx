import Head from 'next/head';
import Link from 'next/link';

import CustomImage from '../components/customImage';
import Header from './header/Header';
import MainScreen from './main-screen/MainScreen';

interface IProps {
  children?: JSX.Element | JSX.Element[] | React.ReactChild | string | string[];
  home?: boolean;
}

const Layout = ({ children, home }: IProps) => {
  return (
    <>
      {/* Head */}
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content="Blog page" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Header */}
      <Header />
      <MainScreen />
      {/* Main Wrapper */}
      <div className="flex flex-col justify-between h-screen">
        {/* Main */}
        <main className="mt-20">
          <div className="container">
            {home && <CustomImage height={150} width={150} />}
            {!home && (
              <>
                <CustomImage height={80} width={80} />
                <div>
                  <Link href="/">
                    <a className="bg-orange-500 text-white p-1 rounded">
                      ← Back to home
                    </a>
                  </Link>
                </div>
              </>
            )}
            {/* Children */}
            {children}
          </div>
        </main>
        {/* Footer */}
        <footer className="bg-slate-700 p-1 text-center mt-10">
          <div className="container">
            <span className="text-white">
              I am footer and will be always at the bottom 😉
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
