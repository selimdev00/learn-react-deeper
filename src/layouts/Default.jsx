import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
