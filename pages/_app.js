import Footer from '../components/Footer';
import Header from '../components/Header';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize('G-YQKQ605EYZ');

    const handleRouteChange = (url) => {
      ReactGA.send({ hitType: "pageview", page: url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
