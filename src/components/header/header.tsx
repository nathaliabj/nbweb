import React, { FC, MouseEventHandler } from "react";

import { HeaderContainer, Nb, Year, ModeTrigger } from "./header.sc";

interface HeaderProps {
  themeToggler: MouseEventHandler,
}

const Header: FC<HeaderProps> = ({ themeToggler }) => {

  return (
    <HeaderContainer data-scroll-section>
      <Nb>NB</Nb>
      <ModeTrigger onClick={themeToggler}>//</ModeTrigger>
      <Year>© 2021</Year>
    </HeaderContainer>
  );
};

export default Header;
