import React, { FC } from "react";
import ThemeToggler from "../theme-toggler";

import { HeaderContainer, Nb, Year } from "./header.sc";

const Header: FC = () => (
  <HeaderContainer data-scroll-section>
    <Nb>NB</Nb>
    <ThemeToggler>//</ThemeToggler>
    <Year>© 2021</Year>
  </HeaderContainer>
);

export default Header;
