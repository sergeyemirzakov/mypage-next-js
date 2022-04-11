import Link from 'next/link';
import Image from 'next/image';

interface ArticleHeaderProps {
  userImg: string;
  userName: string;
}

const ArticleHeader = ({ userImg, userName }: ArticleHeaderProps) => {
  return (
    <div className="inline-flex">
      <Link href="/">
        <a className="flex items-center mb-2">
          <Image
            className="rounded-full"
            src={userImg}
            alt="Picture of the author"
            width="24px"
            height="24px"
            objectFit="cover"
          />
          <div className="ml-3 text-sm">{userName}</div>
        </a>
      </Link>
    </div>
  );
};

export default ArticleHeader;
