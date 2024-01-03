import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  flex-grow: 1;
  height: 100%;
  padding: 1em;
  background-color: #f5f5f5;
`;

function DefaultLayout({ children }) {
  return (
    <StyledWrapper>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledWrapper>
  );
}

export default DefaultLayout;
