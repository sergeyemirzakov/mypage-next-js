import Head from 'next/head';
import { GetStaticProps } from 'next';

import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import Date from '../../components/date';

interface IProps {
  postData: {
    id: string;
    contentHtml: string;
    date?: string;
    title?: string;
  };
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

const Post = ({ postData }: IProps) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article className="article">
        <h1>{postData.title}</h1>
        <div className="article__time">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;
