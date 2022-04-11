import Link from 'next/link';

interface ArticleFooterProps {
  readingTime: string;
  tags: string;
}

const ArticleFooter = ({ readingTime, tags }: ArticleFooterProps) => {
  return (
    <div className="flex items-center mt-3">
      <div className="text-[12px] sm:text-sm mr-5">{readingTime}</div>
      <div className="inline-flex">
        <Link href="/">
          <a className="text-[12px] sm:text-sm bg-slate-200 py-1 px-2 rounded-3xl">
            {tags}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ArticleFooter;
