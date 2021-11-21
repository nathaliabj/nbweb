import React, { FC } from "react";
import {
  LinksContainer,
  Content,
  LinksWrapper,
  LinkWrapper,
  Underline,
  Link,
} from "./links.sc";
import SideTitle from "../side-title/side-title";

const Links: FC = () => (
  <LinksContainer>
    <SideTitle>LKS</SideTitle>
    <Content>
      <p>Want to know more or get in touch? You’ve come to the right place.</p>
      <LinksWrapper>
        <LinkWrapper>
          <Link href="https://github.com/nathaliabj" target="__blank">
            Gitbub
          </Link>
          <Underline />
        </LinkWrapper>
        <span>//</span>
        <LinkWrapper>
          <Link
            href="https://www.linkedin.com/in/nathalia-buitrago-jurado/"
            target="__blank"
          >
            LinkedIn
          </Link>
          <Underline />
        </LinkWrapper>
        <span>//</span>
        <LinkWrapper>
          <Link href="mailto:nathalia.buitragoj@gmail.com">Email</Link>
          <Underline />
        </LinkWrapper>
      </LinksWrapper>
    </Content>
  </LinksContainer>
);

export default Links;
