import Link from 'next/link';

import { HeaderNavigation } from './HeaderNavigation.props';

const menuItems: string[] = ['Our story', 'Membership', 'Write'];

const HeaderNavigation = ({
  scrollHeight,
  openDialogModal,
}: HeaderNavigation) => {
  const buttonStyles = scrollHeight ? 'bg-black' : 'bg-green-600';

  return (
    <>
      <nav className="flex items-center text-sm">
        <ul className="flex">
          {menuItems &&
            menuItems.map((item, idx) => (
              <li key={idx} className="mr-7 hidden sm:block">
                <Link href="/">
                  <a>{item}</a>
                </Link>
              </li>
            ))}
          <li className="mr-7">
            <Link href="/">
              <a>Sign in</a>
            </Link>
          </li>
        </ul>
        <button
          onClick={openDialogModal}
          className={
            buttonStyles +
            ' text-white py-2 px-5 rounded-2xl transition duration-300'
          }
        >
          Get started
        </button>
      </nav>
    </>
  );
};

export default HeaderNavigation;
