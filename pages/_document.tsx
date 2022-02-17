import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content="Frontend Web Developer" />
          <meta property="og:type" content="" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="" />
          <link rel="icon" href="/static/favicons/favicon.ico" sizes="any" />
          <link
            rel="icon"
            href="/static/favicons/icon.svg"
            type="image/svg+xml"
          />
          <link rel="apple-touch-icon" href="/static/favicons/icon.png" />
          <meta name="theme-color" content="#fafafa" />
          <link
            rel="preload"
            href="/static/switzer-variable.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="dark:bg-zinc-900 dark:text-zinc-50 bg-zinc-50 text-zinc-900 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
