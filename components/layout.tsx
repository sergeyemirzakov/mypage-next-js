import Head from 'next/head';
import Link from 'next/link';

import CustomImage from '../components/customImage';

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
      <header className="bg-blue-800 p-2 fixed top-0 left-0 right-0 text-center z-50">
        <div className="container">
          <span className="text-white">
            I am header and will be always at the top 😉
          </span>
        </div>
      </header>

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
