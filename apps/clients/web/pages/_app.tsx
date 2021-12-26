import { useRouter } from 'next/router';
import { CSSProperties } from 'react';
import { useState, useEffect } from 'react';
import { Loading } from '@ecosystem/components/ui';
import { useStore } from '../hooks/useStore';

import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getUserData = useStore((store) => store.getUserData);

  const changeHandler = () => {
    setIsLoading(true);
  };

  const changeCompleteHandler = () => {
    setIsLoading(false);
  };

  const visibleStyle: CSSProperties = {
    display: 'block',
  };

  const inVisibleStyle: CSSProperties = {
    display: 'none',
  };

  useEffect(() => {
    router.events.on('routeChangeStart', changeHandler);
    router.events.on('routeChangeComplete', changeCompleteHandler);
    router.events.on('routeChangeError', changeCompleteHandler);

    return () => {
      router.events.off('routeChangeStart', changeHandler);
      router.events.off('routeChangeComplete', changeCompleteHandler);
      router.events.off('routeChangeError', changeCompleteHandler);
    };
  });

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) getUserData(authToken);
  }, [getUserData]);

  return (
    <>
      <Head>
        <title>Welcome to site!</title>
      </Head>
      <div style={isLoading ? visibleStyle : inVisibleStyle}>
        <Loading />
      </div>
      <div style={isLoading ? inVisibleStyle : visibleStyle}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
