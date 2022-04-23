import Link from 'next/link';
import { normalizeArticleDate } from '../../lib/utils/normalizeDate';

interface ArticleFooterProps {
  tagList: string[];
  createdAt: string;
}

const ArticleFooter = ({ tagList, createdAt }: ArticleFooterProps) => {
  const articleDate = normalizeArticleDate(createdAt);

  return (
    <div className="flex items-center mt-3">
      <div className="text-[12px] sm:text-[12px] mr-5 text-gray-500">
        • {articleDate}
      </div>
      <div className="inline-flex">
        {tagList.map((tag, idx) => (
          <Link key={idx} href="/">
            <a className="text-[12px] text-gray-500 sm:text-[13px] bg-gray-100 py-1 px-3 rounded-3xl mr-1">
              {tag}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleFooter;
