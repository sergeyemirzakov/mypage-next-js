import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import ArticleImage from './ArticleImage';
import ArticleFooter from './ArticleFooter';
import { ArticleProps } from './Article.props';
import ARTICLE_DATA from './ArticleData.json';

const Article = () => {
  return (
    <div className="w-full order-1 md:w-3/5 md:order-0">
      {ARTICLE_DATA.data.map((item: ArticleProps) => (
        <div key={item.id} className="mb-16">
          <div className="flex items-center justify-between">
            <div className="w-full">
              {/* User Avatar and User Name */}
              <ArticleHeader userImg={item.userImg} userName={item.userName} />

              {/* Atricle Body */}
              <ArticleBody title={item.title} description={item.description} />

              {/* Article Reading Time and Tags */}
              <ArticleFooter readingTime={item.readingTime} tags={item.tags} />
            </div>

            {/* Article Picture */}
            <ArticleImage articleImg={item.articleImg} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
