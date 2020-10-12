import React from "react";

import Header from "../header";
import Footer from "../footer";

import { LayoutWrapper } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
        {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
