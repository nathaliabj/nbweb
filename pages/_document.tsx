import Document, {
  DocumentContext,
  Head,
  Main,
  Html,
  NextScript,
} from "next/document";
import { ServerStyleSheet, ThemeProvider } from "styled-components";
import GlobalStyle from "../src/global-styles";
import theme from "../src/theme";

/**
 * _document page. Customises the "Document" model to augment the app's HTML.
 *
 * Only rendered in the server (build time for SSG)
 *
 * https://nextjs.org/docs/advanced-features/custom-document
 */
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  public render = () => (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Main />
            <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}

export default MyDocument;


