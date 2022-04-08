import Link from 'next/link';

const Logo = () => {
  return (
    <div className="bg-black text-white">
      <Link href="/">
        <a className="p-2">Logo</a>
      </Link>
    </div>
  );
};

export default Logo;
