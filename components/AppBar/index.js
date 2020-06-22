import React, { useState } from 'react';
import FloatLinks from '../FloatLinks';
import Search from '../Search';
import Link from 'next/link';
import './style.less';

const TAB = {
  ZAIXIAN: '在线',
  XIAZAI: '下载',
  ZIMU: '字幕',
};

const AppBar = (props) => {
  const [nowTab, setNowTab] = useState(TAB.ZAIXIAN);

  return (
    <div className="app-bar">
      <div className="app-bar-top">
        <div className="app-bar-logo">
          <Link href="/">
            <img src="/logo.svg" />
          </Link>
        </div>
        <div className="app-bar-search">
          <Search />
        </div>
        <FloatLinks />
      </div>
      <div className="app-bar-bottom">
        <div className="tab-bar">
          <span
            onClick={() => setNowTab(TAB.ZAIXIAN)}
            className={`tab-item ${nowTab === TAB.ZAIXIAN ? 'active' : ''}`}
          >
            {TAB.ZAIXIAN}
          </span>
          <span
            onClick={() => setNowTab(TAB.XIAZAI)}
            className={`tab-item ${nowTab === TAB.XIAZAI ? 'active' : ''}`}
          >
            {TAB.XIAZAI}
          </span>
          <span
            onClick={() => setNowTab(TAB.ZIMU)}
            className={`tab-item ${nowTab === TAB.ZIMU ? 'active' : ''}`}
          >
            {TAB.ZIMU}
          </span>
        </div>
      </div>
    </div>
  );
};
export default AppBar;
