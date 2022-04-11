import { useState, useEffect } from 'react';

import { HeaderProps } from './Header.props';
import HeaderNavigation from '../header-navigation/HeaderNavigation';
import Logo from '../logo/Logo';

const Header = ({ openDialogModal }: HeaderProps) => {
  const OFFSET_HEIGHT_TRIGGER = 250;
  const [scrollHeight, setScrollHeight] = useState(true);

  useEffect(() => {
    const onScrollHanlder = () => {
      window.pageYOffset < OFFSET_HEIGHT_TRIGGER
        ? setScrollHeight(true)
        : setScrollHeight(false);
    };
    window.addEventListener('scroll', onScrollHanlder);
    return () => window.removeEventListener('scroll', onScrollHanlder);
  }, []);

  // Header styles
  const headerBackground = scrollHeight ? 'bg-blue-200' : 'bg-white';
  const headerDefaultStyles =
    ' flex items-center border-b border-black fixed top-0 left-0 right-0 text-center z-50 h-20 transition duration-300';

  return (
    <header className={headerBackground + headerDefaultStyles}>
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <HeaderNavigation
            openDialogModal={openDialogModal}
            scrollHeight={scrollHeight}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
