// Layout that every page will follow, not specific to anything in /src/components, more for /src/pages/
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
