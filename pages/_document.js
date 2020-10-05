import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='stylesheet' href='https://use.typekit.net/xkz5olp.css' />
          <meta charset='UTF-8' />
        </Head>
        <body style={{ margin: '0' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
