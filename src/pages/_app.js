import '../styles/globals.css';
import Layout from '../styles/layout';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [nextPage, setNextPage] = useState('');
  const router = useRouter();

  useEffect(() => {
    let locomotiveScroll;
    let timeoutId;

    import('locomotive-scroll').then(LocomotiveScrollModule => {
      locomotiveScroll = new LocomotiveScrollModule.default({
        // ...options
      });
    });

    // Define the loading logic
    const finishLoading = () => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
    };

    // Simulate a loading delay
    timeoutId = setTimeout(finishLoading, 2000);

    const handleRouteChangeStart = (url) => {
      setIsLoading(true);
      const pageName = url === '/' ? 'Home' : url.charAt(1).toUpperCase() + url.slice(2);
      setNextPage(pageName);
  };

    const handleRouteChangeComplete = () => {
      clearTimeout(timeoutId); // Clear the timeout to prevent the state update after unmounting
      finishLoading();
      setNextPage('');
    };

    // Register route change events
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);

    return () => {
      // Clean up on unmount
      clearTimeout(timeoutId);
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);

      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, [router]);

  return (
    <Layout>
      <AnimatePresence>
        {isLoading ? (
          <Preloader key="preloader" nextPage={nextPage}/>
        ) : (
          <Component {...pageProps} key={router.route} />
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
