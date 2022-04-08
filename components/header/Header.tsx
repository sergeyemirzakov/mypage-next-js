import { useState, useEffect } from 'react';

import HeaderNavigation from '../header-navigation/HeaderNavigation';
import Logo from '../logo/Logo';

const Header = () => {
  const offsetHeightTrigger = 250;
  const [scrollHeight, setScrollHeight] = useState<boolean>(true);

  const onScrollHanlder = () => {
    window.pageYOffset < offsetHeightTrigger
      ? setScrollHeight(true)
      : setScrollHeight(false);
  };

  useEffect(() => {
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
          <HeaderNavigation scrollHeight={scrollHeight} />
        </div>
      </div>
    </header>
  );
};

export default Header;
