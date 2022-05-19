import axios from 'axios';
import { useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { ARTICLES_API } from '../../lib/endpoints/endpoints';
import useSWR from 'swr';
import { storage } from '../../lib/utils/storage';
import ArticleBody from '../../components/articles/ArticlesBody';
import ArticleFooter from '../../components/articles/ArticlesFooter';
import ArticleImage from '../../components/articles/ArticlesImage';
import Spinner from '../../components/preloaders/Spinner';

const ARTICLE_IMG =
  'https://images.unsplash.com/photo-1626013696955-7559356d4a4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const Profile = ({ data }: any) => {
  const { data: user } = useSWR('user', storage);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<[]>([]);

  useEffect(() => {
    if (data) {
      const getArticles = async () => {
        setIsLoading(true);
        const response = await axios.get(
          `${ARTICLES_API}?author=${data?.profile?.username}`,
          {
            headers: {
              Authorization: 'Token ' + user?.token,
            },
          }
        );
        if (response?.status === 200) setIsLoading(false);
        setArticles(response?.data.articles);
      };
      getArticles();
    }
  }, [data, user]);

  return (
    <Layout>
      <div className="container">
        <div className="mt-5">
          <div className="flex items-center">
            {!!data && (
              <Image
                className="rounded-full"
                src={data?.profile.image}
                width="100px"
                height="100px"
                objectFit="cover"
              />
            )}
            <div className="ml-5">
              <div className="flex flex-col">
                <div className="text-sm text-gray-400">Username</div>
                <div className="text-2xl">{data?.profile.username}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold my-10">Articles</div>
          {/* Show Spiner while the data is loading */}
          {isLoading && <Spinner size="30" color="black" />}

          {/* Render posts here */}
          {!!articles &&
            articles.map((item: any) => (
              <div
                key={item.slug}
                className="mb-5 max-w-[400px] sm:max-w-[500px] md:max-w-[620px]"
              >
                <div className="flex items-center justify-between">
                  <div className="w-full">
                    {/* Atricle Body */}
                    <ArticleBody
                      slug={item.slug}
                      title={item.title}
                      description={item.description}
                    />

                    {/* Article Reading Time and Tags */}
                    <ArticleFooter
                      createdAt={item.createdAt}
                      tagList={item.tagList}
                    />
                  </div>

                  {/* Article Picture */}
                  <ArticleImage articleImg={ARTICLE_IMG} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/profile/null'],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await axios.get<any>(
    'https://api.realworld.io/api/profiles/' + params?.user
  );

  return {
    props: {
      data,
    },
  };
};

export default Profile;
