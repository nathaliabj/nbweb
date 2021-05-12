import React, { FC } from "react";
import Head from "../head/head";
import { Container, Content } from "./layout.sc";

const Layout: FC = ({ children }) => (
  <>
    <Head />
    <Container>
      <Content>{children}</Content>
    </Container>
  </>
);

export default Layout;
