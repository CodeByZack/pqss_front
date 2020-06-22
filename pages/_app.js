import 'less/iconfont.less';
import 'less/styles.less';
import 'less/normalize.less';
import Store from '@/store';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Store.Provider>
      <Head>
        <title>佩奇搜索</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" type="text/css" href="/npprogress.css" />
      </Head>
      <Component {...pageProps} />
    </Store.Provider>
  );
}
