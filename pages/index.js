import FloatLinks from '../components/FloatLinks';
import Search from '../components/Search';
import BoxLayout from '../components/BoxLayout';
import MovieItem from '../components/MovieItem';
import Footer from '../components/Footer';
import Store from '@/store';

import './index.less';

export default function Home() {
  const { windowWidth } = Store.useContainer();
  console.log(windowWidth);
  return (
    <div className="container">
      <FloatLinks />
      <div className="main">
        <div className="logo">
          <img src="/logo.svg" />
        </div>
        <Search />
        <BoxLayout title={'测试'}>
          <div className="grid-3">
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
          </div>
        </BoxLayout>
        <Footer />
      </div>
    </div>
  );
}
