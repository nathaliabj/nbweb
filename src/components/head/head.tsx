import NextHead from "next/head";
import React, { FC } from "react";

const Head: FC = () => (
    <NextHead data-testid="docs-head">
      <meta charSet="UTF-8" />
      <title>Nathalia Buitrago </title>

      <meta name="title" content="Nathalia Buitrago" />
      <meta
        name="description"
        content="Nathalia Buitrago &amp; Front-end developer, London, United Kingdom"
        key="description"
      />
      <meta
        name="keywords"
        content="HTML, CSS, TypeScript, JavaScript, React, styled components, Modern, United Kingdom, London, Europe"
        key="keywords"
      />
      <link rel="icon" href="http://nbweb.me/favicon.ico" type="image/x-icon" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>
  );

export default Head;
