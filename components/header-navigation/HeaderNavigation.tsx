import useSWR from 'swr';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderNavigation } from './HeaderNavigation.props';
import { storage } from '../../lib/utils/storage';
import { MdOutlineCreate } from 'react-icons/md';
import UserPanel from '../user/UserPanel';
import { useState } from 'react';

const HeaderNavigation = ({ scrollHeight }: HeaderNavigation) => {
  const [openUserPanel, setOpenUserPanel] = useState(false);
  const router = useRouter();
  const { data: user } = useSWR('user', storage);
  const isLoggedIn = !!user;

  // if the the header is lower than the "scrollHeight" then paint the buttom green
  const buttonStyles = scrollHeight ? 'bg-black' : 'bg-green-600';

  // If user is logged in, show the modal screen to create the article.
  // Otherwise direct to login page
  const createArticle = () => {
    isLoggedIn ? router.push('/create-article') : router.push('/login');
  };

  const onOpenUserPanel = () => {
    setOpenUserPanel((prev) => !prev);
  };

  return (
    <>
      <nav className="flex items-center text-sm">
        <ul className="flex items-center">
          <li className="mr-5">
            <button onClick={createArticle} className="flex items-center">
              <span className="mr-1">
                <MdOutlineCreate size="1.3rem" />
              </span>
              Create Article
            </button>
          </li>
          <li className="mr-5">
            {/* If the user is logged in, we show the logout button otherwise we show the login */}
            {!isLoggedIn && (
              <button onClick={() => router.push('/login')}>Sign In</button>
            )}
          </li>
        </ul>
        {/* If the user is logged in, we show a thumbnail. 
        The thumbnail is created by the first character of the username */}
        {isLoggedIn && (
          <div className="relative" onClick={onOpenUserPanel}>
            <div className="border-[3px] rounded-full border-gray-500">
              {isLoggedIn && (
                <Link href="/">
                  <a className="flex items-center justify-center rounded-full text-white bg-black h-[30px] w-[30px]">
                    {user.username[0]}
                  </a>
                </Link>
              )}
            </div>
            {/* User Panel */}
            <div className="absolute left-[-55px] top-[45px]">
              {openUserPanel && <UserPanel />}
            </div>
          </div>
        )}
        {/* If the user is not logged in, we show this button */}
        {!isLoggedIn && (
          <button
            onClick={() => router.push('/register')}
            className={
              buttonStyles +
              ' text-white py-2 px-5 rounded-2xl transition duration-300'
            }
          >
            Get started
          </button>
        )}
      </nav>
    </>
  );
};

export default HeaderNavigation;
