import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head></Head>
        <body className="bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
          </style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
