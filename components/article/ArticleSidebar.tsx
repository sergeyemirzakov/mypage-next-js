import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';

const ArticleSidebar = () => {
  const router = useRouter();

  const buttonStyles = `cursor-pointer rounded-lg 
    border border-gray-300 bg-gray-100 
    flex justify-center items-center 
    w-[40px] h-[40px] mb-4`;

  return (
    <div className="hidden md:w-[5%] md:block mt-8">
      <ul className="sticky top-[112px]">
        <Link href="/" passHref>
          <li className={buttonStyles}>
            <a className="text-black">
              <FaHome size="1.6rem" />
            </a>
          </li>
        </Link>
        <Link href="/" passHref>
          <li className={buttonStyles}>
            <a
              onClick={() => router.push('/create-article')}
              className="text-black"
            >
              <IoIosCreate size="1.6rem" />
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ArticleSidebar;
