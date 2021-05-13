import React, { FC } from "react";
import { HeaderContainer, Nb, Icon, Year } from "./header.sc";

// import icon from '/icon.svg';

const Header: FC = () => (
  <HeaderContainer>
    <Nb>NB</Nb>
    <Icon  />
    <Year>© 2021</Year>
  </HeaderContainer>
);

export default Header;
