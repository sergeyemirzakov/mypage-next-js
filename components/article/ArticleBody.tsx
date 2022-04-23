import Link from 'next/link';

interface ArticleBodyProps {
  title: string;
  description: string;
  slug: string;
}

const ArticleBody = ({ title, description, slug }: ArticleBodyProps) => {
  return (
    <div className="block">
      <Link href={`/articles/${slug}`}>
        <a>
          <h3 className="sm:text-md md:text-xl font-bold">{title}</h3>
          <p className={'hidden sm:block mt-1 text-sm text-gray-500'}>
            {description.length > 200
              ? description?.slice(0, 200) + '...'
              : description}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default ArticleBody;
