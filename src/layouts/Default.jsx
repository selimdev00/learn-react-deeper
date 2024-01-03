import Header from "../components/Layout/Header";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default DefaultLayout;
