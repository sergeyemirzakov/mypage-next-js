import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

interface IProps {
  allPostsData: {
    id: string;
    date: string;
    title: string;
  }[];
}

const Home: NextPage<IProps> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>Future awesome blog</title>
      </Head>

      {/* Main Section */}
      <section>
        <h1 className="text-slate-700 font-bold text-5xl mt-5 text-center">
          Future awesome blog
        </h1>

        <h2 className="text-blue-700 font-bold text-3xl mt-10 text-center">
          Introduction
        </h2>

        <p className="text-slate-700 text-2xl mt-1 font-semibold text-center">
          Let me explain to you. I am learning Next Js and this is just a demo
          blogpage. However I guess to create my personal page on Next Js. I
          highly liked it.
        </p>
      </section>

      <section className="mt-10 mb-10 text-center">
        <h2 className="text-blue-700 font-bold text-3xl mb-5">Read blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="text-xl border-b-2 mb-5">
              <div className="text-sm">
                <Date dateString={date} />
              </div>
              <Link href={`/posts/${id}`}>
                <a className="hover:bg-slate-300">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
