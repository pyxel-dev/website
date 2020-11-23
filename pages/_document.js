import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <style global jsx>{`
            :host {
              display: flex;
              flex-direction: column;
            }

            .block {
              display: flex;
              flex-direction: column;
              width: 90%;
              margin: 10rem auto;
            }
      `}</style>
        </body>
      </Html>
    )
  }
}

export default MyDocument;
