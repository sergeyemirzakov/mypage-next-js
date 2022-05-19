import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';

import { ArticlesItems } from '../../interfaces/articles.interface';
import Article from '../../components/article/Article';
import ArticleComments from '../../components/article/ArticleComments';
import ArticleSidebar from '../../components/article/ArticleSidebar';
import Layout from '../../components/layout/Layout';

const ARTICLE_IMG =
  'https://images.unsplash.com/photo-1626013696955-7559356d4a4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const ArticlePage = ({ data }: any) => {
  return (
    <Layout>
      <div className="container">
        <div className="flex flex-wrap">
          <ArticleSidebar />
          <Article
            authorImg={data?.article?.author?.image}
            username={data?.article?.author?.username}
            articleImg={ARTICLE_IMG}
            title={data?.article?.title}
            body={data?.article?.body}
            slug={data?.article?.slug}
          />
          <ArticleComments slug={data?.article?.slug} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get<ArticlesItems>(
    'https://api.realworld.io/api/articles/'
  );

  return {
    paths: data.articles.map((p) => '/articles/' + p.slug),
    fallback: true,
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
