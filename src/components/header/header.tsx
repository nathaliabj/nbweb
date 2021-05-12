import React, { FC } from "react";
import { HeaderContainer, Logo, Icon, Year} from "./header.sc";
import nb from '/nb.svg';
import icon from '/icon.svg';

const Header: FC = () => (
  <HeaderContainer>
    <Logo src={nb} />
    <Icon src={icon} />
    <Year>© 2021</Year>
  </HeaderContainer>
);

export default Header;
