import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add the viewport meta tag here */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* You can also link external fonts, stylesheets, etc. here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
