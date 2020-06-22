import 'less/iconfont.less';
import 'less/styles.less';
import 'less/normalize.less';
import Store from '@/store';
import Head from 'next/head';
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Store.Provider>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Store.Provider>
  );
}
