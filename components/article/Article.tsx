import useSWR from 'swr';
import ArticleLoader from './ArticleLoader';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import ArticleImage from './ArticleImage';
import ArticleFooter from './ArticleFooter';
import { getArticles } from '../../lib/api/articles';

const ARTICLE_IMG =
  'https://images.unsplash.com/photo-1649194270591-8eead57b94c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80';

const Article = () => {
  const { data, error } = useSWR('articles', getArticles);

  return (
    <div className="w-full order-1 md:w-3/5 md:order-0">
      {/* If we encounter an error, we show this block */}
      {error && (
        <h1 className="text-xl font-semibold text-red-500">Server error</h1>
      )}

      {/* While we are waiting posts we are showing preloaders */}
      {!data && !error && <ArticleLoader />}

      {/* Render posts here */}
      {!!data &&
        data.articles.map((item) => (
          <div key={item.slug} className="mb-16">
            <div className="flex items-center justify-between">
              <div className="w-full">
                {/* User Avatar and User Name */}
                <ArticleHeader
                  authorImg={item.author.image}
                  username={item.author.username}
                />

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
  );
};

export default Article;
