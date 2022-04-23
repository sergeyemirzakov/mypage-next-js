import Image from 'next/image';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';

import { ArticlesItems } from '../../interfaces/articles.interface';
import Layout from '../../components/layout/Layout';

const ARTICLE_IMG =
  'https://images.unsplash.com/photo-1649194270591-8eead57b94c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80';

const ArticlePage = ({ data }: any) => {
  return (
    <Layout>
      <div className="container">
        <div className="mt-10">
          <div className="flex items-center">
            <div className="flex mr-3">
              <Image
                className="rounded-full"
                src={data?.article?.author?.image}
                alt="Picture of the author"
                width="40"
                height="40"
                objectFit="cover"
              />
            </div>
            <span>{data?.article?.author?.username}</span>
          </div>
        </div>
        <div className="my-10">
          <Image src={ARTICLE_IMG} width="600" height="400" objectFit="cover" />
        </div>
        <div className="font-bold text-3xl my-10">{data?.article?.title}</div>
        <p>{data?.article?.body}</p>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get<ArticlesItems>(
    'https://api.realworld.io/api/articles/'
  );

  return {
    paths: data.articles.flatMap((p) => '/articles/' + p.slug),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await axios.get<ArticlesItems>(
    'https://api.realworld.io/api/articles/' + params?.article
  );

  return {
    props: {
      data,
    },
  };
};

export interface ArticlePageProps {
  data: ArticlesItems | ArticlesItems[];
}

export default ArticlePage;
