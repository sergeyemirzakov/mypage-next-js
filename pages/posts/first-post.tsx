import Head from 'next/head';
import Link from 'next/link';

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <div className="container px-4">
        <h1 className="text-orange-600">First Post</h1>
        <p>Description of this post</p>
        <h2>
          <Link href="/">
            <a>Back to home 🏠</a>
          </Link>
        </h2>
      </div>
    </>
  );
};

export default FirstPost;
