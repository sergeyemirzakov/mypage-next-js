import Link from 'next/link';
import Image from 'next/image';

interface UserNameProps {
  authorImg: string;
  username: string;
  size: string;
}

export const UserName = ({ authorImg, username, size }: UserNameProps) => {
  return (
    <Link href={`/profile/${username}`}>
      <a className="inline-flex items-center mb-2">
        {!!authorImg && (
          <Image
            className="rounded-full"
            src={authorImg}
            alt="Picture of the author"
            width={`${size}px`}
            height={`${size}px`}
            objectFit="cover"
          />
        )}

        <div className="ml-3 text-sm">{username}</div>
      </a>
    </Link>
  );
};

export default UserName;
