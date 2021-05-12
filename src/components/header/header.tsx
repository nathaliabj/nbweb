import React, { FC } from "react";
import { HeaderContainer, Logo, Icon, Year} from "./header.sc";
// import nb from '/nb.svg';
// import icon from '/icon.svg';

const Header: FC = () => (
  <HeaderContainer>
    <Logo  />
    <Icon  />
    <Year>© 2021</Year>
  </HeaderContainer>
);

export default Header;
