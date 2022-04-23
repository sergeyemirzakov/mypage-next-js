import Header from '../header/Header';
import Footer from '../footer/Footer';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Header */}
      <Header />
      <div className="flex flex-col justify-between">
        {/* Main */}
        <main className="mt-20">
          <div>{children}</div>
        </main>
        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
