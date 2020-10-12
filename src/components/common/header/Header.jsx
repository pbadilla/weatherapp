import React from "react";

import { HeaderWrapper, Logo } from "./Header.styles";

import MapleLeaf from "../../../../public/images/mapleLeaf.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={MapleLeaf} />
      <Logo>City Weather App</Logo>
    </HeaderWrapper>
  );
};

export default Header;
