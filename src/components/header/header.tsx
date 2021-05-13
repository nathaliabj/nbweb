import React, { FC } from "react";
import { HeaderContainer, Nb, ModeTrigger, Year } from "./header.sc";

const Header: FC = () => (
  <HeaderContainer>
    <Nb>NB</Nb>
    <ModeTrigger>//</ModeTrigger>
    <Year>© 2021</Year>
  </HeaderContainer>
);

export default Header;
