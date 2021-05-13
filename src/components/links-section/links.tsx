import React, { FC } from "react";
import { LinksContainer, Content, SideTitle } from "./links.sc";

const Links: FC = () => (
  <LinksContainer>
    <SideTitle>LKS</SideTitle>
    <Content>
      <p>
        Want to know more or get in touch? You’ve come to the right place.
      </p>
      <ul>
        <li>Gitbub</li>
        <li>LinkedIn</li>
        <li>Email</li>
      </ul>
    </Content>
  </LinksContainer>
);

export default Links;
