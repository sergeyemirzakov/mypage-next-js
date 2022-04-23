import { useState } from 'react';
import type { AppProps } from 'next/app';
// import { Provider } from 'react-redux';
// import { store } from '../store/store';
import '../styles/globals.css';
import Router from 'next/router';
import Preloader from '../components/preloaders/Preloader';
import { AppContextProvider } from '../lib/context/app-context';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setIsLoading(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setIsLoading(false);
  });

  return (
    <AppContextProvider>
      {isLoading && <Preloader />}
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
