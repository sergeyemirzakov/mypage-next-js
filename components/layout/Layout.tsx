import { useState } from 'react';

import Header from '../header/Header';
import MainScreen from '../main-screen/MainScreen';
import Article from '../article/Article';
import Sidebar from '../sidebar/Sidebar';
import DialogModal from '../dialog-modal/DialogModal';
import Footer from '../footer/Footer';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialogModal = () => {
    setIsOpen(true);
  };

  const closeDialogModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header openDialogModal={openDialogModal} />
      <MainScreen openDialogModal={openDialogModal} />
      {isOpen && (
        <DialogModal isOpen={isOpen} closeDialogModal={closeDialogModal} />
      )}
      <div className="pt-20">
        <div className="container">
          <div className="flex flex-col md:flex md:flex-row">
            <Article />
            <Sidebar />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <main className="mt-20">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
