import Link from 'next/link';

interface TagsListProps {
  tags: string[] | undefined;
}

const TagsList = ({ tags }: TagsListProps) => {
  return (
    <>
      {!!tags &&
        tags.map((item, idx) => (
          <Link key={idx} href="/">
            <a className="text-slate-500 border border-slate-200 py-2 px-4 mr-2 mb-2 text-xs rounded-md">
              {item}
            </a>
          </Link>
        ))}
    </>
  );
};

export default TagsList;
