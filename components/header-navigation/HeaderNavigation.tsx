import useSWR, { useSWRConfig } from 'swr';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderNavigation } from './HeaderNavigation.props';
import { storage } from '../../lib/utils/storage';

const MENU_ITEMS: string[] = ['Our story', 'Membership', 'Write'];

const HeaderNavigation = ({ scrollHeight }: HeaderNavigation) => {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { data: user } = useSWR('user', storage);
  const isLoggedIn = !!user;

  // if the the header is lower than the "scrollHeight" then paint the buttom green
  const buttonStyles = scrollHeight ? 'bg-black' : 'bg-green-600';

  return (
    <>
      <nav className="flex items-center text-sm">
        <ul className="flex items-center">
          {MENU_ITEMS &&
            MENU_ITEMS.map((item, idx) => (
              <li key={idx} className="mr-7 hidden sm:block">
                <Link href="/">
                  <a>{item}</a>
                </Link>
              </li>
            ))}
          <li className="mr-7">
            {/* If the user is logged in, we show the logout button otherwise we show the login */}
            {isLoggedIn && (
              <button
                onClick={() =>
                  mutate('user', sessionStorage.removeItem('user'))
                }
              >
                Logout
              </button>
            )}
            {!isLoggedIn && (
              <button onClick={() => router.push('/login')}>Sign In</button>
            )}
          </li>
        </ul>
        {/* If the user is logged in, we show a thumbnail. 
        The thumbnail is created by the first character of the username */}
        {isLoggedIn && (
          <Link href="/">
            <a className="flex items-center justify-center rounded-full text-white bg-black h-[30px] w-[30px]">
              {user.username[0]}
            </a>
          </Link>
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
